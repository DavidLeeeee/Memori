import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/navigator.module.css";
import styledBox from "../../styles/boxFramer.module.css";
// import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useNavStore } from "../../Container/useNavState";
import {
  AiOutlineHolder,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
  AiOutlineNumber,
  AiTwotoneAppstore,
  AiTwotonePushpin,
} from "react-icons/ai";

function Navigator() {
  const { navState, setNavStore } = useNavStore();
  const handleIconClick = () => {
    setNavStore();
  };

  const memos = [
    { id: 1, category: "HTML", description: "HTML 태그 배우기" },
    { id: 2, category: "JavaScript", description: "ES6 문법 익히기" },
    { id: 3, category: "React", description: "훅 사용법 마스터하기" },
  ];
  const pins = [
    { id: 1, category: "Next.js의 기초", description: "Next.js의 기초" },
    { id: 2, category: "Node.js 알아보기", description: "Node.js" },
    { id: 3, category: "풀스택 개발자", description: "풀스택 개발일지" },
  ];
  const social = [
    { id: 1, category: "18학번", description: "18학번 기록" },
    { id: 2, category: "덕후", description: "덕후 기록" },
    { id: 3, category: "롤악귀", description: "롤 악귀" },
  ];

  return (
    <nav
      className={styles.NavBox}
      style={{ left: navState === 1 ? "-240px" : "0" }}
    >
      {/* <h2 className={styles.LoginAlert}>로그인을 해주세요</h2> */}
      <div onClick={handleIconClick} className={styles.NavController}>
        {navState === 0 ? (
          <AiOutlineDoubleRight size={28} />
        ) : (
          <AiOutlineDoubleLeft size={28} />
        )}
      </div>

      <section className={`${styledBox.F_ColBox} ${styles.Memo_List} `}>
        <h3 className={styles.MemoCaption}>
          <AiOutlineNumber style={{ margin: "0 8px 2px 0" }} />
          Memori
        </h3>
        <ul>
          {memos.map((memo) => (
            <li key={memo.id}>
              <Link className="Memo_Link" to={`/edit/${memo.id}`}>
                <AiOutlineHolder size={16} />
                {memo.category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <hr className={styledBox.Divide} />

      <section className={`${styledBox.F_ColBox} ${styles.Memo_List} `}>
        <h3 className={styles.MemoCaption}>
          <AiTwotonePushpin style={{ margin: "0 8px 2px 0" }} />
          Pin
        </h3>
        <ul>
          {pins.map((pins) => (
            <li key={pins.id}>
              <Link className="Memo_Link" to={`/view/${pins.id}`}>
                <AiOutlineHolder size={16} />
                {pins.category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <hr className={styledBox.Divide} />

      <section className={`${styledBox.F_ColBox} ${styles.Memo_List} `}>
        <h3 className={styles.MemoCaption}>
          <AiTwotoneAppstore style={{ margin: "0 8px 2px 0" }} />
          Social
        </h3>
        <ul>
          {social.map((social) => (
            <li key={social.id}>
              <Link className="Memo_Link" to={`/social/${social.id}`}>
                <AiOutlineHolder size={16} />
                {social.category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Profile navState={navState} />
    </nav>
  );
}

export default Navigator;
