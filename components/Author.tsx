import { Avatar, Divider } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import styles from "../styles/components/author.module.css";

const Author = () => {
  return (
    <div className={`${styles.authorDiv} commBox`}>
      <div>
        <Avatar
          size={100}
          src="https://avatars.githubusercontent.com/u/67702479?v=4"
        ></Avatar>
      </div>
      <div className={styles.authorIntroduction}>
        个人介绍个人介绍个人介绍个人介绍个人介绍
        <Divider>社交账号</Divider>
        <Avatar
          size={28}
          icon={<GithubOutlined />}
          className="account"
        ></Avatar>
        <Avatar size={28} icon={<QqOutlined />} className="account"></Avatar>
        <Avatar
          size={28}
          icon={<WechatOutlined />}
          className="account"
        ></Avatar>
      </div>
    </div>
  );
};

export default Author;
