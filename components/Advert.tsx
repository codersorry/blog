/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/components/advert.module.css";

const Advert = () => {
  return (
    <div className={`${styles.adDiv} commBox`}>
      <div>
        <img
          src="https://img.jspang.com/HeadImages/BBD20220422.jpg"
          width="100%"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.jspang.com/HeadImages/BBD20220422.jpg"
          width="100%"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.jspang.com/HeadImages/BBD20220422.jpg"
          width="100%"
          alt=""
        />
      </div>
    </div>
  );
};

export default Advert;
