import React, { useState } from "react";
import styledBox from "../styles/boxFramer.module.css";
import ToolBar from "../components/Editpage_components/ToolBar";
import ContentBox from "../components/Editpage_components/ContentBox";
import ContentGenerator from "../components/Editpage_components/ContentGenerator";

function Edit_page() {
  const [contentBoxes, setContentBoxes] = useState([]);
  const [nextId, setNextId] = useState(0);

  const addContentBox = (index, type) => {
    const newContentBox = { id: nextId, type };
    const newContentBoxes = [...contentBoxes];
    newContentBoxes.splice(index, 0, newContentBox);
    setContentBoxes(newContentBoxes);
    setNextId(nextId + 1);
  };

  return (
    <div>
      <ToolBar />
      <div className={styledBox.MainContainer}>
        <ContentGenerator addContentBox={(type) => addContentBox(0, type)} />
        {contentBoxes.map((box, index) => (
          <React.Fragment key={box.id}>
            <ContentBox id={box.id} type={box.type} />
            <ContentGenerator
              addContentBox={(type) => addContentBox(index + 1, type)}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Edit_page;
