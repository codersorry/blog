import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col } from "antd";
import styles from "../styles/pages/index.module.css";

const List: NextPage = () => {
  return (
    <div>
      <Head>
        <title>List</title>
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
          Left
        </Col>
        <Col className={styles.commRight} xs={0} sm={0} md={7} lg={5} xl={4}>
          Right
        </Col>
      </Row>
    </div>
  );
};

export default List;
