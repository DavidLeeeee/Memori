import React, { useState } from "react";
import styledBox from "../styles/boxFramer.module.css";
import ToolBar from "../components/Editpage_components/ToolBar";
import ContentBox from "../components/Editpage_components/ContentBox";
import ContentGenerator from "../components/Editpage_components/ContentGenerator";

function Edit_page() {
  const [components, setComponents] = useState([]); // 동적 컨텐츠 생성 배열

  //주어진 인덱스 다음 삽입하는 함수
  const addComponents = (index) => {
    setComponents((prev) => {
      const newComponents = [...prev];
      newComponents.splice(
        index + 1,
        0,
        <ContentBox key={`contentBox-${newComponents.length}`} />,
        <ContentGenerator
          key={`contentGen-${newComponents.length + 1}`}
          addComponents={addComponents}
        />
      );
      return newComponents;
    });
  };

  return (
    <div>
      <ToolBar />
      <div className={styledBox.MainContainer}>
        <ContentGenerator addComponents={() => addComponents(-1)} />
        {components.map((component, index) =>
          React.cloneElement(component, { key: index })
        )}
      </div>
    </div>
  );
}

export default Edit_page;
