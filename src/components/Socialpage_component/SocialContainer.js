import React from "react";
import CardNews from "./CardNews";

const SocialContainer = ({ containerName }) => {
  return (
    <div>
      <h3>{containerName}</h3>
      <CardNews />
    </div>
  );
};

export default SocialContainer;
