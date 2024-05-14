import React from "react";
import styles from "../../styles/login.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";
import { useLoginModalStore } from "../../Container/useLoginModalState";

export const Login = () => {
  const { setLoginModalState } = useLoginModalStore();
  const ProfileClick = () => {
    setLoginModalState();
  };

  return (
    <div className={`${styledBox.opaque} ${styles.Background} `}>
      <div className={styles.LoginBox}>
        <h1>MEMORI</h1>
        <h2>아름다운 기록 ,</h2>
        <h2>미모리</h2>
        <hr />

        <ul className={styles.loginTools}>
          <h4>소셜계정으로 로그인</h4>
          <li style={{ backgroundColor: "rgb(200,80,80)", color: "white" }}>
            <FaGoogle style={{ marginRight: "8px" }} />
            <p>google</p>
          </li>
          <li style={{ backgroundColor: "#6f42c1", color: "white" }}>
            <FaGithub style={{ marginRight: "8px" }} />
            <p>github</p>
          </li>
          <li style={{ backgroundColor: "black", color: "white" }}>
            <FaApple style={{ marginRight: "8px" }} />
            <p>apple</p>
          </li>
        </ul>
        <h5 onClick={ProfileClick}>돌아가기</h5>
      </div>
    </div>
  );
};

export default Login;
