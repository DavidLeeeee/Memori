import React, { useState } from "react";
import styles from "../../styles/Editpage/ContentBox.module.css";
import TextArea from "./AreaType/TextArea";
import ImageArea from "./AreaType/ImageArea";
import EmbedArea from "./AreaType/EmbedArea";
import {
  AiOutlineHolder,
  AiOutlineMore,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsBorderOuter } from "react-icons/bs";
import { RiColorFilterLine } from "react-icons/ri";

export const ContentBox = ({ id, type, removeBox }) => {
  const [contentModal, setContentModal] = useState(0);
  const SettingOnClick = () => {
    setContentModal((prevState) => (prevState === 0 ? 1 : 0));
  };

  return (
    <div className={styles.ContentBox}>
      <AiOutlineHolder className={styles.icon} />

      <div className={styles.contentArea}>
        {type === "embed" && <EmbedArea id={id} />}
        {type === "text" && <TextArea id={id} />}
        {type === "image" && <ImageArea id={id} />}
      </div>

      <div>
        <AiOutlineMore onClick={SettingOnClick} className={styles.icon} />
        {contentModal === 1 && (
          <div className={styles.boxSettingModal}>
            <ModalBox removeBox={() => removeBox(id)} />
            {/* <p>{id}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

const ModalBox = ({ removeBox }) => {
  return (
    <div className={styles.modalArea}>
      <AiOutlineDelete onClick={removeBox} className={styles.icon2} />
      <BsBorderOuter className={styles.icon2} />
      <RiColorFilterLine className={styles.icon2} />
    </div>
  );
};

export default ContentBox;
