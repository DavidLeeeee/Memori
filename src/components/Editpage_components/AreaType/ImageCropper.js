import { useState } from "react";
import styles from "../../../styles/Editpage/ImageArea.module.css";

export const useImageCropper = (selectedImage, setSelectedImage) => {
  const [cropping, setCropping] = useState(false);
  const [cropArea, setCropArea] = useState({
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  });

  const handleEditClick = () => {
    const imageElement = document.querySelector(`.${styles.preview}`);
    setCropArea({
      top: 0,
      left: 0,
      width: imageElement.clientWidth,
      height: imageElement.clientHeight,
    });
    setCropping(true);
  };

  const handleCropMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const { top, left, width, height } = cropArea;

    const handleMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setCropArea({
        top: top + dy,
        left: left + dx,
        width,
        height,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleCropHandleMouseDown = (handle, e) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const { top, left, width, height } = cropArea;

    const handleMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      switch (handle) {
        case "tl":
          setCropArea({
            top: top + dy,
            left: left + dx,
            width: width - dx,
            height: height - dy,
          });
          break;
        case "tr":
          setCropArea({
            top: top + dy,
            left,
            width: width + dx,
            height: height - dy,
          });
          break;
        case "bl":
          setCropArea({
            top,
            left: left + dx,
            width: width - dx,
            height: height + dy,
          });
          break;
        case "br":
          setCropArea({
            top,
            left,
            width: width + dx,
            height: height + dy,
          });
          break;
        default:
          break;
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  //자르기 확정
  const handleCropConfirm = () => {
    const imageElement = document.querySelector(`.${styles.preview}`);
    const cropCanvas = document.createElement("canvas");
    const scaleX = imageElement.naturalWidth / imageElement.width;
    const scaleY = imageElement.naturalHeight / imageElement.height;

    cropCanvas.width = cropArea.width * scaleX;
    cropCanvas.height = cropArea.height * scaleY;

    const ctx = cropCanvas.getContext("2d");
    ctx.drawImage(
      imageElement,
      cropArea.left * scaleX,
      cropArea.top * scaleY,
      cropArea.width * scaleX,
      cropArea.height * scaleY,
      0,
      0,
      cropCanvas.width,
      cropCanvas.height
    );

    const croppedImageUrl = cropCanvas.toDataURL("image/jpeg");
    setSelectedImage(croppedImageUrl);
    setCropping(false);
  };

  //자르기 그리기
  const renderCropper = () =>
    cropping && (
      <>
        <div
          className={styles.cropArea}
          style={{
            top: `${cropArea.top}px`,
            left: `${cropArea.left}px`,
            width: `${cropArea.width}px`,
            height: `${cropArea.height}px`,
          }}
          onMouseDown={handleCropMouseDown}
        >
          <div
            className={`${styles.cropHandle} ${styles.tl}`}
            onMouseDown={(e) => handleCropHandleMouseDown("tl", e)}
          ></div>
          <div
            className={`${styles.cropHandle} ${styles.tr}`}
            onMouseDown={(e) => handleCropHandleMouseDown("tr", e)}
          >
            <button onClick={handleCropConfirm} className={styles.cropButton}>
              자르기
            </button>
          </div>
          <div
            className={`${styles.cropHandle} ${styles.bl}`}
            onMouseDown={(e) => handleCropHandleMouseDown("bl", e)}
          ></div>
          <div
            className={`${styles.cropHandle} ${styles.br}`}
            onMouseDown={(e) => handleCropHandleMouseDown("br", e)}
          ></div>
        </div>
      </>
    );

  return {
    handleEditClick,
    renderCropper,
  };
};
