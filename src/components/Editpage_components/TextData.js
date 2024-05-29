import React from "react";

const TextData = ({ initialText = "", initialStyle = {} }) => {
  const textData = [{ text: initialText, style: initialStyle }];

  const renderText = () => {
    return textData.map((item, index) => (
      <span key={index} style={item.style}>
        {item.text}
      </span>
    ));
  };

  return <div>{renderText()}</div>;
};

export default TextData;
