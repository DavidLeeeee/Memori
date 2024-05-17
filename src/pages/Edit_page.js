import React, { useState } from "react";
import styledBox from "../styles/boxFramer.module.css";
import ToolBar from "../components/Editpage_components/ToolBar";
import ContentBox from "../components/Editpage_components/ContentBox";
import ContentGenerator from "../components/Editpage_components/ContentGenerator";

function Edit_page() {
  const [contentBoxes, setContentBoxes] = useState([]);

  const addContentBox = () => {
    setContentBoxes([
      ...contentBoxes,
      <ContentBox key={contentBoxes.length} />,
    ]);
  };
  return (
    <div>
      <ToolBar />
      <div className={styledBox.MainContainer}>
        <ContentGenerator addContentBox={addContentBox} />
        {contentBoxes.map((box, index) => (
          <React.Fragment key={index}>
            {box}
            <ContentGenerator addContentBox={addContentBox} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Edit_page;
