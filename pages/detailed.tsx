/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import { Row, Col, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";

import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import styles from "../styles/pages/detailed.module.css";

const Detailed: NextPage = () => {
  let markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className={styles.commMain} justify="center">
        <Col
          className={styles.commLeft}
          xs={24}
          sm={24}
          md={18}
          lg={16}
          xl={14}
        >
          <div className={styles.breadDiv}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/list">视频列表</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">xxx</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className={styles.detailedTitle}>我是标题我是标题</div>
            <div className={styles.listIcon}>
              <span>
                <CalendarOutlined />
                2022-5-20
              </span>
              <span>
                <FolderOutlined />
                视频教程
              </span>
              <span>
                <FireOutlined />
                520人
              </span>
            </div>
            <div className={styles.detailedContent}>
              <ReactMarkdown sourcePos={false}>{markdown}</ReactMarkdown>
            </div>
          </div>
        </Col>
        <Col className={styles.commRight} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Detailed;
