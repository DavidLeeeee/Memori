import React, { useState, useRef } from "react";
import styles from "../../../styles/Editpage/ImageArea.module.css";

const ImageArea = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(50);
  const imageBoxRef = useRef(null);
  const startX = useRef(0);
  const initialWidth = useRef(50);

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    startX.current = event.clientX;
    initialWidth.current = imageWidth; // Store the initial width
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (event) => {
    if (imageBoxRef.current) {
      const imageBoxRect = imageBoxRef.current.getBoundingClientRect();
      const deltaX = event.clientX - startX.current;
      const newWidth =
        initialWidth.current + (deltaX / imageBoxRect.width) * 100;
      if (newWidth > 0 && newWidth <= 100) {
        setImageWidth(newWidth);
      }
    }
  };
  // 마우스이벤트 삭제
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.imageBox} ref={imageBoxRef}>
      <div
        className={styles.dropArea}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <button onClick={handleButtonClick} className={styles.uploadButton}>
          Select File
        </button>

        {selectedImage ? (
          <div
            className={styles.imageWrapper}
            style={{ width: `${imageWidth}%` }}
          >
            <img
              src={selectedImage}
              alt="Uploaded"
              className={styles.preview}
              onMouseDown={handleMouseDown}
            />
          </div>
        ) : (
          <p>Drag & Drop an image here</p>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className={styles.fileInput}
      />
    </div>
  );
};

export default ImageArea;
