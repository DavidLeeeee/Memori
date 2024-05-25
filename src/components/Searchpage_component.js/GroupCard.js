import React from "react";
import styles from "../../styles/Searchpage/searchPage.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { CiLock } from "react-icons/ci";

const GroupCard = ({ keyProp }) => {
  return (
    <div style={{ width: "25%" }}>
      <section className={`${styledBox.F_RowBox} ${styles.CardBox}`}>
        <div className={styles.imageBox}>
          {keyProp}
          <div className={styles.lockedImg}>
            <CiLock color="white" size={28} />
          </div>
        </div>
        <article className={`${styledBox.F_ColBox} ${styles.textBox}`}>
          <h3 className={styles.groupName}>sakki의 프론트엔드</h3>
          <ul className={styles.tags}>
            <li>#태그1</li>
            <li>#태그2</li>
            <li>#태그2</li>
            <li>#태그2</li>
            <li>#태그2</li>
            <li>#태그2</li>
            <li>#태그2</li>
          </ul>
          <div className={styles.info}>자유 게시</div>
        </article>
      </section>
    </div>
  );
};

export default GroupCard;
