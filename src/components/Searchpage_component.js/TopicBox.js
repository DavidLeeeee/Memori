import React from "react";
import styles from "../../styles/Searchpage/searchPage.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { GoDotFill, GoDot } from "react-icons/go";
import GroupCard from "./GroupCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopicBox = () => {
  return (
    <section className={`${styledBox.F_ColBox} ${styles.unnamedBox}`}>
      <div className={`${styledBox.F_RowBox} ${styles.topBox}`}>
        <h2 className={styles.topic}># 주제</h2>
        <div className={`${styledBox.F_RowBox} ${styles.pagenator}`}>
          <div className={styles.pageMover}>
            <GoDotFill size={18} />
            <GoDot size={18} />
            <GoDot size={18} />
            <GoDot size={18} />
            <GoDot size={18} />
          </div>
          <p>더보기</p>
        </div>
      </div>

      <div className={`${styledBox.F_RowBox} ${styles.bottomBox}`}>
        <IoIosArrowBack className={styles.leftmover} />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <IoIosArrowForward className={styles.rightmover} />
      </div>
    </section>
  );
};

export default TopicBox;
