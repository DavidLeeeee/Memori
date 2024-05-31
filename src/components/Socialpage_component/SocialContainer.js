import React from "react";
import CardNews from "./CardNews";
import styledBox from "../../styles/boxFramer.module.css";
import styles from "../../styles/SocialPage/SocialPage.module.css";
import Shifters from "./ListMover";
const SocialContainer = ({ containerName }) => {
  return (
    <section className={`${styledBox.F_ColBox} ${styles.SocialContainer}`}>
      <div className={`${styledBox.F_RowBox} ${styles.topBox}`}>
        <h3 className={styles.topic}>{containerName}</h3>
        <p>더보기</p>
      </div>
      <div className={styles.bottomBoxWrapper}>
        <div className={`${styledBox.F_RowBox} ${styles.bottomBox}`}>
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
        <Shifters />
      </div>
    </section>
  );
};

export default SocialContainer;
