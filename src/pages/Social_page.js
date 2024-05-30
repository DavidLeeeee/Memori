import React from "react";
import SocialContainer from "../components/Socialpage_component/SocialContainer";
function Social_page() {
  return (
    <div>
      <SocialContainer containerName="좋아요 표시한 메모" />
      <SocialContainer containerName="최신 등록 메모" />
      <SocialContainer containerName="" />
    </div>
  );
}

export default Social_page;
