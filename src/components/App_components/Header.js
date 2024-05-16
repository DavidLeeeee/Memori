import React from "react";
import styles from "../../styles/header.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import {
  MdInfo,
  MdLightbulb,
  MdMoreVert,
  MdOutlineContrast,
  MdOutlineSettings,
} from "react-icons/md";
export const Header = () => {
  return (
    <section className={`${styledBox.F_RowBox} ${styles.HeaderBox}`}>
      <div className={`${styledBox.F_RowBox} ${styles.SettingBox}`}>
        <p>최종 수정일 : 2024.05.14</p>
        <MdMoreVert color="#333" size={20} className={styles.icon} />
      </div>
      <div className={`${styledBox.F_RowBox} ${styles.GlobalSettingBox}`}>
        <MdOutlineContrast color="#333" size={20} className={styles.icon} />
        <MdLightbulb color="#333" size={20} className={styles.icon} />
        <MdInfo color="#333" size={20} className={styles.icon} />
        <MdOutlineSettings color="#333" size={20} className={styles.icon} />
      </div>
    </section>
  );
};
export default Header;
