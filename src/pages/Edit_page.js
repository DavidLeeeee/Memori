import React, { useState } from "react";
import styledBox from "../styles/boxFramer.module.css";
import ContentBox from "../components/Editpage_components/ContentBox";
import ContentGenerator from "../components/Editpage_components/ContentGenerator";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Edit_page() {
  const [contentBoxes, setContentBoxes] = useState([]);
  const [nextId, setNextId] = useState(0);

  //추가 함수
  const addContentBox = (index, type) => {
    const newContentBox = { id: nextId, type };
    const newContentBoxes = [...contentBoxes];
    newContentBoxes.splice(index, 0, newContentBox);
    setContentBoxes(newContentBoxes);
    setNextId(nextId + 1);
  };
  //순서변경 함수
  const moveContentBox = (dragIndex, hoverIndex) => {
    const dragItem = contentBoxes[dragIndex];
    const updatedContentBoxes = [...contentBoxes];
    updatedContentBoxes.splice(dragIndex, 1);
    updatedContentBoxes.splice(hoverIndex, 0, dragItem);
    setContentBoxes(updatedContentBoxes);
  };
  //삭제 함수
  const removeContentBox = (id) => {
    setContentBoxes(contentBoxes.filter((box) => box.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styledBox.MainContainer}>
        <ContentGenerator addContentBox={(type) => addContentBox(0, type)} />
        {contentBoxes.map((box, index) => (
          <React.Fragment key={box.id}>
            <ContentBox
              id={box.id} //고유 식별자
              type={box.type} //콘텐츠 유형
              index={index} //contentBox의 현재 인덱스
              removeBox={removeContentBox} //contentBox의 삭제 함수
              moveContentBox={moveContentBox} //contentBox의 순서변경 함수
            />
            <ContentGenerator
              addContentBox={(type) => addContentBox(index + 1, type)}
            />
          </React.Fragment>
        ))}
      </div>
    </DndProvider>
  );
}

export default Edit_page;
