import React from "react";
import styles from "../../styles/header.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import useHoverModal from "../Functions/useHoverModal";
import ThreeDot from "./headerModals/threeDot";
import Alarm from "./headerModals/alarm";
import Info from "./headerModals/info";
import Setting from "./headerModals/setting";
import {
  MdInfo,
  MdLightbulb,
  MdMoreVert,
  MdOutlineContrast,
  MdOutlineSettings,
} from "react-icons/md";

export const Header = () => {
  const threeDotModal = useHoverModal();
  const alarmModal = useHoverModal();
  const infoModal = useHoverModal();
  const settingModal = useHoverModal();

  return (
    <section className={`${styledBox.F_RowBox} ${styles.HeaderBox}`}>
      <div className={`${styledBox.F_RowBox} ${styles.SettingBox}`}>
        <p>최종 수정일 : 2024.05.14</p>
        <div
          onMouseEnter={threeDotModal.handleMouseEnter}
          onMouseLeave={threeDotModal.handleMouseLeave}
          style={{ position: "relative" }}
        >
          <MdMoreVert color="#333" size={20} className={styles.icon} />
          {threeDotModal.isModalOpen && <ThreeDot />}
        </div>
      </div>
      <div className={`${styledBox.F_RowBox} ${styles.GlobalSettingBox}`}>
        <MdOutlineContrast color="#333" size={20} className={styles.icon} />
        <div
          onMouseEnter={alarmModal.handleMouseEnter}
          onMouseLeave={alarmModal.handleMouseLeave}
          style={{ position: "relative" }}
        >
          <MdLightbulb color="#333" size={20} className={styles.icon} />
          {alarmModal.isModalOpen && <Alarm />}
        </div>
        <div
          onMouseEnter={infoModal.handleMouseEnter}
          onMouseLeave={infoModal.handleMouseLeave}
          style={{ position: "relative" }}
        >
          <MdInfo color="#333" size={20} className={styles.icon} />
          {infoModal.isModalOpen && <Info />}
        </div>
        <div
          onMouseEnter={settingModal.handleMouseEnter}
          onMouseLeave={settingModal.handleMouseLeave}
          style={{ position: "relative" }}
        >
          <MdOutlineSettings color="#333" size={20} className={styles.icon} />
          {settingModal.isModalOpen && <Setting />}
        </div>
      </div>
    </section>
  );
};

export default Header;
