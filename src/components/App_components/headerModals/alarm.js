import React from "react";
import styles from "../../../styles/hoverModal.module.css";
import { TiDelete } from "react-icons/ti";

const alarm = () => {
  return (
    <div className={styles.modalBox}>
      <div className={styles.alarmBox}>
        <div className={styles.alarmNameBox}>
          <h3>React 기록</h3>
          <TiDelete />
        </div>
        <p>게시글의 좋아요수가 10을 넘었습니다.</p>
      </div>
      <div className={styles.alarmBox}>
        <div className={styles.alarmNameBox}>
          <h3>React 기록</h3>
          <TiDelete />
        </div>
        <p>게시글의 좋아요수가 10을 넘었습니다.</p>
      </div>
      <div className={styles.alarmBox}>
        <div className={styles.alarmNameBox}>
          <h3>React 기록</h3>
          <TiDelete />
        </div>
        <p>게시글의 좋아요수가 10을 넘었습니다.</p>
      </div>
    </div>
  );
};

export default alarm;
