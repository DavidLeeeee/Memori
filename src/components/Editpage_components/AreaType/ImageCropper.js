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

  // Edit 버튼 클릭 시 크롭 영역 설정 및 크롭 모드 활성화
  const handleEditClick = () => {
    const imageElement = document.querySelector(`.${styles.preview}`);
    setCropArea({
      top: 0,
      left: 0,
      width: imageElement.clientWidth - 8,
      height: imageElement.clientHeight - 8,
    });
    setCropping(true);
  };

  // 크롭 영역 드래그 시작
  const handleCropMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const initialTop = cropArea.top;
    const initialLeft = cropArea.left;

    // 크롭 영역 드래그 중
    const handleMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setCropArea((prev) => {
        const imageElement = document.querySelector(`.${styles.preview}`);
        const imageBoxRect = imageElement.getBoundingClientRect();
        // Crop 영역이 이미지 경계를 벗어나지 않도록 제한
        const newTop = Math.max(
          0,
          Math.min(initialTop + dy, imageBoxRect.height - prev.height)
        );
        const newLeft = Math.max(
          0,
          Math.min(initialLeft + dx, imageBoxRect.width - prev.width)
        );
        return {
          top: newTop,
          left: newLeft,
          width: prev.width,
          height: prev.height,
        };
      });
    };

    // 크롭 영역 드래그 종료
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // 크롭 핸들 드래그 시작
  const handleCropHandleMouseDown = (handle, e) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const initialTop = cropArea.top;
    const initialLeft = cropArea.left;
    const initialWidth = cropArea.width;
    const initialHeight = cropArea.height;

    // 크롭 핸들 드래그 중
    const handleMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setCropArea((prev) => {
        const imageElement = document.querySelector(`.${styles.preview}`);
        const imageBoxRect = imageElement.getBoundingClientRect();
        let newTop = prev.top;
        let newLeft = prev.left;
        let newWidth = prev.width;
        let newHeight = prev.height;

        // 상단 핸들 드래그
        if (handle.includes("t")) {
          newTop = Math.max(0, initialTop + dy);
          newHeight = initialHeight - dy;
          if (newHeight < 20) {
            newTop = prev.top;
            newHeight = prev.height;
          }
        }
        // 좌측 핸들 드래그
        if (handle.includes("l")) {
          newLeft = Math.max(0, initialLeft + dx);
          newWidth = initialWidth - dx;
          if (newWidth < 20) {
            newLeft = prev.left;
            newWidth = prev.width;
          }
        }
        // 우측 핸들 드래그
        if (handle.includes("r")) {
          newWidth = Math.min(
            initialWidth + dx,
            imageBoxRect.width - initialLeft - 8
          );
          if (newWidth < 20) {
            newWidth = prev.width;
          }
        }
        // 하단 핸들 드래그
        if (handle.includes("b")) {
          newHeight = Math.min(
            initialHeight + dy,
            imageBoxRect.height - initialTop - 8
          );
          if (newHeight < 20) {
            newHeight = prev.height;
          }
        }

        // Crop 영역이 이미지 경계를 벗어나지 않도록 제한
        if (newTop < 0) {
          newHeight += newTop;
          newTop = 0;
        }
        if (newLeft < 0) {
          newWidth += newLeft;
          newLeft = 0;
        }
        if (newTop + newHeight > imageBoxRect.height) {
          newHeight = imageBoxRect.height - newTop;
        }
        if (newLeft + newWidth > imageBoxRect.width) {
          newWidth = imageBoxRect.width - newLeft;
        }

        return {
          top: newTop,
          left: newLeft,
          width: Math.max(20, newWidth),
          height: Math.max(20, newHeight),
        };
      });
    };

    // 크롭 핸들 드래그 종료
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // 크롭 확정 버튼 클릭 시
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

  // 크롭 영역 렌더링
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
          {/* 각 모서리 핸들 */}
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
