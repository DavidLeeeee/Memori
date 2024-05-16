import React, { useState } from "react";
import styles from "../../styles/Editpage/ToolBar.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import {
  HiOutlineMenu,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt3,
} from "react-icons/hi";
import ColorPalette from "./ColorPalette";

export const ToolBar = () => {
  const [fontSize, setFontSize] = useState(12);
  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
  };
  const [showColorPalette, setShowColorPalette] = useState(false);
  const toggleColorPalette = () => {
    setShowColorPalette(!showColorPalette);
  };

  return (
    <div className={`${styledBox.F_RowBox} ${styles.ToolBox}`}>
      {/* 제어 관련 기능 */}
      <section className={`${styledBox.F_RowBox} ${styles.controlBox}`}>
        <button>
          <RiArrowGoBackFill />
        </button>
        <button>
          <RiArrowGoForwardFill />
        </button>
      </section>
      {/* 폰트 관련 기능 */}
      <section className={`${styledBox.F_RowBox} ${styles.fontBox}`}>
        <label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min="8"
            max="72"
          />
        </label>
        <button>
          <b>B</b>
        </button>
        <button>
          <em>I</em>
        </button>
        <button>
          <u>A</u>
        </button>

        <button
          onClick={toggleColorPalette}
          style={{ backgroundColor: "black" }}
        ></button>
        {showColorPalette && (
          <ColorPalette setShowColorPalette={setShowColorPalette} />
        )}
      </section>
      {/* 정렬 관련 기능 */}
      <section className={`${styledBox.F_RowBox} ${styles.ArrayBox}`}>
        <button>
          <HiOutlineMenuAlt2 />
        </button>
        <button>
          <HiOutlineMenu />
        </button>
        <button>
          <HiOutlineMenuAlt3 />
        </button>
      </section>
    </div>
  );
};

export default ToolBar;
