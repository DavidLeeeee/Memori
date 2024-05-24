import React from "react";
import styles from "../../styles/Searchpage/searchPage.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className={`${styledBox.F_ColBox} ${styles.hotTopicBox}`}>
      <ul className={`${styledBox.F_RowBox} ${styles.topicList}`}>
        <li># 코딩</li>
        <li># 디자인</li>
        <li># 덕후</li>
        <li># 패션</li>
      </ul>

      <div className={`${styledBox.F_RowBox} ${styles.searchBox}`}>
        <div className={styles.tagSearcher}>
          태그검색 <CiSearch />
        </div>
        <div className={styles.idSearcher}>
          그룹 ID 검색 <CiSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
