import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Editpage/TextArea.module.css";

export const TextArea = ({ id }) => {
  const [content, setContent] = useState(""); // 텍스트 콘텐츠 상태
  const textAreaRef = useRef(null); // 텍스트 영역 참조

  // 텍스트 변경 핸들러
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // 텍스트 영역의 높이를 자동으로 조정
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

export default TextArea;
