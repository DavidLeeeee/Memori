import React, { useEffect, useRef } from "react";
import styles from "../../styles/Editpage/ToolBar.module.css";

export const ColorPalette = ({ setShowColorPalette }) => {
  const colors = [
    "#000000",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#007bff",
    "#6610f2",
    "#6f42c1",
    "#e83e8c",
    "#dc3545",
    "#ffc107",
    "#28a745",
    "#20c997",
    "#17a2b8",
    "#6c757d",
    "#f8f9fa",
    "#343a40",
    "#ffffff",
  ];

  const handleColorSelect = (color) => {
    console.log(`Color selected: ${color}`);
    // Here you can handle the color change, e.g., update the state or modify the style of selected text
  };

  const paletteRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (paletteRef.current && !paletteRef.current.contains(event.target)) {
        setShowColorPalette(false); // 상태 업데이트 함수를 호출하여 팔레트를 닫습니다.
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowColorPalette]);

  return (
    <div ref={paletteRef} className={styles.colorPalette}>
      {colors.map((color) => (
        <div
          key={color}
          className={styles.colorSwatch}
          style={{ backgroundColor: color }}
          onClick={() => {
            handleColorSelect(color);
            setShowColorPalette();
          }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
