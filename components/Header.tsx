import React from "react";
import { Row, Col, Menu, Button } from "antd";
import styles from "../styles/components/header.module.css";
import Router from "next/router";
import Link from "next/link";

import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const Header = () => {
  const menuClick = (e: any) => {
    if (e.key == "0") {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className={styles.header}>
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className={styles.headerLogo}>标题</span>
          <span className={styles.HeaderTxt}>
            介绍介绍介绍介绍介绍介绍介绍介绍
          </span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={menuClick}>
            <Menu.Item key="0">
              <HomeOutlined />
              首页
            </Menu.Item>

            <Menu.Item key="1">
              <YoutubeOutlined />
              视频
            </Menu.Item>

            <Menu.Item key="2">
              <SmileOutlined />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
