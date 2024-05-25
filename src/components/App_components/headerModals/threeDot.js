import React, { useState } from "react";
import styles from "../../../styles/hoverModal.module.css";
import { IoMdDownload, IoMdTrash } from "react-icons/io";

const ThreeDot = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.modalBox}>
      <div className={styles.selectBox}>
        전체 공개
        <label className={styles.switch}>
          <input type="checkbox" checked={isToggled} onChange={handleToggle} />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.selectBox}>
        다운로드
        <IoMdDownload />
      </div>
      <div className={styles.selectBox}>
        삭제하기
        <IoMdTrash />
      </div>
    </div>
  );
};

export default ThreeDot;
