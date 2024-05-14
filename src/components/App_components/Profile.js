import React, { useEffect, useState } from "react";
import styles from "../../styles/navigator.module.css";
import { useLoginModalStore } from "../../Container/useLoginModalState";

const Profile = ({ navState }) => {
  const [imgRight, setImgRight] = useState(navState === 1 ? "-80px" : "20px");

  const { setLoginModalState, loginState } = useLoginModalStore(); // Corrected function name to setLoginState

  useEffect(() => {
    if (navState === 1) {
      const timer = setTimeout(() => {
        setImgRight("-80px");
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setImgRight("20px");
    }
  }, [navState]);

  const ProfileClick = () => {
    setLoginModalState();
    console.log(loginState);
  };

  return (
    <div className={styles.ProfileBox}>
      <p className={styles.ProfileName}>이석희님</p>
      <div
        className={styles.Profileimg}
        onClick={ProfileClick}
        style={{ right: imgRight }}
      ></div>
    </div>
  );
};

export default Profile;
