import React from "react";
import { Row, Col, Menu, Button } from "antd";
import styles from "../styles/components/header.module.css";
import Router from "next/router";
import Link from "next/link";

import {
  HomeOutlined,
  SmileOutlined,
  FormOutlined,
  ShareAltOutlined,
  MessageOutlined,
  RocketOutlined,
  UserOutlined,
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
              <FormOutlined />
              项目
            </Menu.Item>

            <Menu.Item key="2">
              <ShareAltOutlined />
              分享
            </Menu.Item>

            <Menu.Item key="3">
              <SmileOutlined />
              互动
            </Menu.Item>

            <Menu.Item key="4">
              <MessageOutlined />
              留言
            </Menu.Item>

            <Menu.Item key="5">
              <RocketOutlined />
              历程
            </Menu.Item>

            <Menu.Item key="6">
              <UserOutlined />
              关于
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
