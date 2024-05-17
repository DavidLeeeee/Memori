import React, { useState } from "react";
import styledBox from "../styles/boxFramer.module.css";
import ToolBar from "../components/Editpage_components/ToolBar";
import ContentBox from "../components/Editpage_components/ContentBox";
import ContentGenerator from "../components/Editpage_components/ContentGenerator";
import ImageArea from "../components/Editpage_components/AreaType/ImageArea";

function Edit_page() {
  const [contentBoxes, setContentBoxes] = useState([]);
  const [nextId, setNextId] = useState(0);

  const addContentBox = (index) => {
    const newContentBox = { id: nextId, content: "" };
    const newContentBoxes = [...contentBoxes];
    newContentBoxes.splice(index, 0, newContentBox);
    setContentBoxes(newContentBoxes);
    setNextId(nextId + 1);
  };

  return (
    <div>
      <ToolBar />
      <div className={styledBox.MainContainer}>
        <ContentGenerator addContentBox={() => addContentBox(0)} />
        {contentBoxes.map((box, index) => (
          <React.Fragment key={box.id}>
            <ContentBox id={box.id} />
            <ContentGenerator addContentBox={() => addContentBox(index + 1)} />
          </React.Fragment>
        ))}
        <ImageArea />
      </div>
    </div>
  );
}

export default Edit_page;
