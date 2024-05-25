import React, { useState } from "react";
import styles from "../../styles/Searchpage/searchPage.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { GoDotFill, GoDot } from "react-icons/go";
import GroupCard from "./GroupCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopicBox = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // 페이지 수 설정
  const itemsPerPage = 4; // 페이지당 항목 수 설정

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getDots = () => {
    let dots = [];
    for (let i = 0; i < totalPages; i++) {
      dots.push(
        i === currentPage ? (
          <GoDotFill size={18} key={i} />
        ) : (
          <GoDot size={18} key={i} />
        )
      );
    }
    return dots;
  };

  return (
    <section className={`${styledBox.F_ColBox} ${styles.unnamedBox}`}>
      <div className={`${styledBox.F_RowBox} ${styles.topBox}`}>
        <h2 className={styles.topic}># 주제</h2>
        <div className={`${styledBox.F_RowBox} ${styles.pagenator}`}>
          <div className={styles.pageMover}>{getDots()}</div>
          <p>더보기</p>
        </div>
      </div>

      <div className={`${styledBox.F_RowBox} ${styles.bottomBox}`}>
        <IoIosArrowBack
          className={styles.leftmover}
          onClick={handlePrevClick}
        />
        <div className={styles.cardContainer}>
          {[...Array(itemsPerPage)].map((_, index) => (
            <GroupCard
              keyProp={index + currentPage * itemsPerPage}
              key={index + currentPage * itemsPerPage}
            />
          ))}
        </div>
        <IoIosArrowForward
          className={styles.rightmover}
          onClick={handleNextClick}
        />
      </div>
    </section>
  );
};

export default TopicBox;
