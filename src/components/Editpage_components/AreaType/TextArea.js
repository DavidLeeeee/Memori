import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill의 기본 스타일
import styles from "../../../styles/Editpage/TextArea.module.css";

// Quill 모듈 설정
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["clean"],
  ],
};

// TextArea 컴포넌트
export const TextArea = ({ id }) => {
  const [content, setContent] = useState(""); // 텍스트 콘텐츠 상태

  return (
    <div className={styles.ContentBox}>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        className={styles.TextArea}
      />
      <div className={styles.contentId}>{id}</div>
    </div>
  );
};

export default TextArea;
