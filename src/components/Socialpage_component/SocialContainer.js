import React, { useRef } from "react";
import CardNews from "./CardNews";
import styledBox from "../../styles/boxFramer.module.css";
import styles from "../../styles/SocialPage/SocialPage.module.css";

const SocialContainer = ({ containerName }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // If we are at the end, scroll to the start
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className={`${styledBox.F_ColBox} ${styles.SocialContainer}`}>
      <div className={`${styledBox.F_RowBox} ${styles.topBox}`}>
        <h3 className={styles.topic}>{containerName}</h3>
        <p>더보기</p>
      </div>
      <div className={styles.bottomBoxWrapper}>
        <div
          ref={scrollContainerRef}
          className={`${styledBox.F_RowBox} ${styles.bottomBox}`}
        >
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
          <CardNews />
          <CardNews />
        </div>
        <div className={styles.leftshifter} onClick={scrollLeft}>
          &lt;
        </div>
        <div className={styles.rightshifter} onClick={scrollRight}>
          &gt;
        </div>
      </div>
    </section>
  );
};

export default SocialContainer;
