/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { Row, Col, List, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import styles from "../styles/pages/list.module.css";
import timeTrans from "../utils/tools/timeTrans";
import { getListById } from "../services/list";

type PropsType = {
  articleList?: [];
};

const MyList: NextPage = (props: PropsType) => {
  const [myList, setMyList] = useState(props.articleList);
  useEffect(() => {
    setMyList(props.articleList);
  }, [props]);

  return (
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="commMain" justify="center">
        <Col className="commLeft" xs={24} sm={24} md={18} lg={16} xl={14}>
          <div className={styles.breadDiv}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/list">列表</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={(item: any) => (
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

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await getListById(id);
  //@ts-ignore
  const articleList = res.data;
  return {
    props: { articleList },
  };
}

export default MyList;
