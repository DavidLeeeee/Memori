import React, { useState, useRef } from "react";
import styles from "../../../styles/Editpage/ImageArea.module.css";
import { RiDeleteBin6Line, RiScissorsCutLine } from "react-icons/ri";
import { useImageCropper } from "./ImageCropper";

const ImageArea = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(50);
  const imageBoxRef = useRef(null);
  const startX = useRef(0);
  const initialWidth = useRef(50);

  //파일 삽입
  const imageDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const imageDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const FileChanged = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const imageFileSelect = () => {
    fileInputRef.current.click();
  };

  // 드래그 이미지 크기 조절
  const imageDragStart = (event) => {
    event.preventDefault();
    startX.current = event.clientX;
    initialWidth.current = imageWidth; // Store the initial width
    document.addEventListener("mousemove", imageDragMove);
    document.addEventListener("mouseup", imageDragEnd);
  };
  const imageDragMove = (event) => {
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
  const imageDragEnd = () => {
    document.removeEventListener("mousemove", imageDragMove);
    document.removeEventListener("mouseup", imageDragEnd);
  };

  //이미지 삭제
  const handleDeleteClick = () => {
    setSelectedImage(null);
  };

  //이미지 편집
  const { handleEditClick, renderCropper } = useImageCropper(
    selectedImage,
    setSelectedImage
  );

  return (
    <div className={styles.imageBox} ref={imageBoxRef}>
      <div
        className={styles.dropArea}
        onDrop={imageDrop}
        onDragOver={imageDragOver}
      >
        <button onClick={imageFileSelect} className={styles.uploadButton}>
          Select File
        </button>

        {selectedImage ? (
          <div
            className={styles.imageWrapper}
            style={{ width: `${imageWidth}%`, minWidth: "120px" }}
          >
            <img
              src={selectedImage}
              alt="Uploaded"
              className={styles.preview}
              onMouseDown={imageDragStart}
            />
            {renderCropper()}
            <div className={styles.overlay}>
              <div className={styles.EditIcon} onClick={handleEditClick}>
                <RiScissorsCutLine color="black" />
              </div>
              <div className={styles.EditIcon} onClick={handleDeleteClick}>
                <RiDeleteBin6Line color="black" />
              </div>
            </div>
          </div>
        ) : (
          <p>Drag & Drop an image here</p>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={FileChanged}
        ref={fileInputRef}
        className={styles.fileInput}
      />
    </div>
  );
};

export default ImageArea;
