import React, { useState } from "react";
import styles from "../../styles/Editpage/ToolBar.module.css";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import {
  HiOutlineMenu,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt3,
} from "react-icons/hi";
import ColorPalette from "./ColorPalette";

const TextToolbar = ({ applyStyle }) => {
  const [fontSize, setFontSize] = useState(12);
  const [showColorPalette, setShowColorPalette] = useState(false);

  const handleFontSizeChange = (e) => {
    const size = Number(e.target.value);
    setFontSize(size);
    applyStyle({ fontSize: `${size}px` });
  };

  const toggleColorPalette = () => {
    setShowColorPalette(!showColorPalette);
  };

  return (
    <div className={styles.ToolBox}>
      <section className={styles.controlBox}>
        <button>
          <RiArrowGoBackFill />
        </button>
        <button>
          <RiArrowGoForwardFill />
        </button>
      </section>
      <section className={styles.fontBox}>
        <label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min="8"
            max="72"
          />
        </label>
        <button onClick={() => applyStyle({ fontWeight: "bold" })}>
          <b>B</b>
        </button>
        <button onClick={() => applyStyle({ fontStyle: "italic" })}>
          <em>I</em>
        </button>
        <button onClick={() => applyStyle({ textDecoration: "underline" })}>
          <u>U</u>
        </button>
        <button onClick={() => applyStyle({ backgroundColor: "yellow" })}>
          <div
            style={{
              padding: "0 6px",
              backgroundColor: "yellow",
            }}
          >
            T
          </div>
        </button>
        <button
          onClick={toggleColorPalette}
          style={{ backgroundColor: "black" }}
        ></button>
        {showColorPalette && (
          <ColorPalette
            setShowColorPalette={setShowColorPalette}
            applyStyle={applyStyle}
          />
        )}
      </section>
      <section className={styles.ArrayBox}>
        <button onClick={() => applyStyle({ textAlign: "left" })}>
          <HiOutlineMenuAlt2 />
        </button>
        <button onClick={() => applyStyle({ textAlign: "center" })}>
          <HiOutlineMenu />
        </button>
        <button onClick={() => applyStyle({ textAlign: "right" })}>
          <HiOutlineMenuAlt3 />
        </button>
      </section>
    </div>
  );
};

export default TextToolbar;
