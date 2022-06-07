import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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

import { ArticleDetailType } from "../services/detailed";
import timeTrans from "../utils/tools/timeTrans";

type PropsType = {
  articleContent?: ArticleDetailType;
};

const Detailed: NextPage = (props: PropsType) => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function (text: any, level: any, raw: any) {
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

  let html = marked(props.articleContent?.article_content);

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
                <Link href="/">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章详情</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className={styles.detailedTitle}>
              {props.articleContent?.title}
            </div>
            <div className={styles.listIcon}>
              <span>
                <CalendarOutlined />
                {timeTrans(props.articleContent?.addTime)}
              </span>
              <span>
                <FolderOutlined />
                {props.articleContent?.typeName}
              </span>
              <span>
                <FireOutlined />
                {props.articleContent?.view_count}
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
