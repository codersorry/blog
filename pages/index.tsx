import React, { useState } from "react";
import type { NextPage } from "next";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { Row, Col, List } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import styles from "../styles/pages/index.module.css";

const Home: NextPage = (props) => {
  const [myList, setMyList] = useState(props.articleList);

  function timeTrans(time: any, type: number) {
    let date: any = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
    date = date.toJSON();
    if (type === 1) {
      date = date.substring(0, 10);
    } else {
      date = date.substring(0, 19).replace("T", " ");
    }
    return date;
  }

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="commMain" justify="center">
        <Col className="commLeft" xs={24} sm={24} md={18} lg={16} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={(item) => (
              <List.Item>
                <div className={styles.listTitle}>
                  <Link
                    href={{ pathname: "/detailed", query: { id: item.id } }}
                  >
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className={styles.listIcon}>
                  <span>
                    <CalendarOutlined />
                    {timeTrans(item.addTime, 2)}
                  </span>
                  <span>
                    <FolderOutlined />
                    {item.typeName}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}
                  </span>
                </div>
                <div className={styles.listContext}>{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="commRight" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios("http://127.0.0.1:7001/default/getArticleList");
  const articleList = res.data.data;
  return {
    props: { articleList },
  };
}

export default Home;
