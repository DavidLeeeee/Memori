import React, { useState } from "react";
import styles from "../../styles/Editpage/ContentGenerator.module.css";
import { FaPlus, FaMinus, FaCode } from "react-icons/fa6";
import { ImFilePicture } from "react-icons/im";
import { RxText } from "react-icons/rx";

export const ContentGenerator = ({ addComponents }) => {
  const [createModal, setCreateModal] = useState(0);
  const onClickButton = () => {
    setCreateModal((prevState) => (prevState === 0 ? 1 : 0));
  };

  return (
    <div className={styles.generationBar}>
      <div className={styles.iconContainer}>
        {createModal === 0 ? (
          <FaPlus
            onClick={onClickButton}
            color="#69e"
            size={20}
            className={styles.icon}
          />
        ) : (
          <>
            <FaMinus
              onClick={onClickButton}
              color="#69e"
              size={20}
              className={styles.icon}
            />
            <ContentMakeModal
              onClickButton={onClickButton}
              addComponents={addComponents}
            />
          </>
        )}
      </div>
    </div>
  );
};

const ContentMakeModal = ({ onClickButton, addComponents }) => {
  const handleIconClick = () => {
    onClickButton();
    addComponents();
  };

  return (
    <div className={styles.ContentList}>
      <FaCode
        onClick={handleIconClick}
        size={24}
        className={styles.contentIcon}
      />
      <ImFilePicture
        onClick={handleIconClick}
        size={24}
        className={styles.contentIcon}
      />
      <RxText
        onClick={handleIconClick}
        size={24}
        className={styles.contentIcon}
      />
    </div>
  );
};

export default ContentGenerator;
