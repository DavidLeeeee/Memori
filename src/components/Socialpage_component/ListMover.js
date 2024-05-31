import React from "react";
import styles from "../../styles/SocialPage/SocialPage.module.css"; // 스타일 파일 경로를 맞게 수정하세요.

const Shifters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftshifter}>&lt;</div>
      <div className={styles.rightshifter}>&gt;</div>
    </div>
  );
};

export default Shifters;
