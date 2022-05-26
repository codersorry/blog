/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import { Row, Col, Breadcrumb, Affix } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";

import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import Tocify from "../components/tocift";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import styles from "../styles/pages/detailed.module.css";
import { getArticleById } from "../services/detailed";

const Detailed: NextPage = (props) => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    highlight: function (code: any) {
      return hljs.highlightAuto(code).value;
    },
  });

  let html = marked(props.articleContent.article_content);

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
            <div
              className={styles.detailedContent}
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Col>
        <Col className={styles.commRight} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className={styles.navTitle}>文章目录</div>
            {tocify && tocify.render()}
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await getArticleById(id);
  const articleContent = res.data[0];
  return {
    props: { articleContent },
  };
}

export default Detailed;
