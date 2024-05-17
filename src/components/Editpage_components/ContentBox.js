import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Editpage/ContentBox.module.css";

export const ContentBox = () => {
  const [content, setContent] = useState("");
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className={styles.ContentBox}>
      <textarea
        ref={textAreaRef}
        className={styles.TextArea}
        value={content}
        onChange={handleChange}
        spellCheck={false}
        placeholder="..."
      />
    </div>
  );
};

export default ContentBox;
