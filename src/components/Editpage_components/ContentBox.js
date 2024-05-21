import React from "react";
import styles from "../../styles/Editpage/ContentBox.module.css";
import TextArea from "./AreaType/TextArea";
import ImageArea from "./AreaType/ImageArea";
import EmbedArea from "./AreaType/EmbedArea";

export const ContentBox = ({ id, type }) => {
  return (
    <div className={styles.ContentBox}>
      {type === "embed" && <EmbedArea id={id} />}
      {type === "text" && <TextArea id={id} />}
      {type === "image" && <ImageArea id={id} />}

      <p>box{id}</p>
    </div>
  );
};

export default ContentBox;
