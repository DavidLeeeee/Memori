import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Editpage/TextArea.module.css";

export const TextArea = () => {
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(100); // 기본값 50%
  const textAreaRef = useRef(null);
  const containerRef = useRef(null);
  const isResizing = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleMouseDown = (e) => {
    isResizing.current = true;
    startX.current = e.clientX;
    startWidth.current = containerRef.current.offsetWidth;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isResizing.current) {
      const dx = e.clientX - startX.current;
      const newWidth =
        ((startWidth.current + dx) /
          containerRef.current.parentElement.offsetWidth) *
        100;
      setWidth(Math.max(10, Math.min(newWidth, 100))); // 최소 10%, 최대 100%
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div
      className={styles.Container}
      ref={containerRef}
      style={{ width: `${width}%`, minWidth: "320px" }}
    >
      <div className={styles.ContentBox}>
        <textarea
          ref={textAreaRef}
          className={styles.TextArea}
          value={content}
          onChange={handleChange}
          spellCheck={false}
          placeholder="..."
        />
        <div className={styles.Resizer} onMouseDown={handleMouseDown} />
      </div>
    </div>
  );
};

export default TextArea;
