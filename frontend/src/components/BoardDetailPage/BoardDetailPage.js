import React from "react";
import { EachPostContainer } from "../../containers";
import "./BoardDetailPage.css";

const BoardDetailPage = ({ match }) => {
  const { postId } = match.params;
  console.log(`BoardDetailPage postId: ${postId}`);
  return (
    <div className="board_detail_page_container">
      <EachPostContainer postId={postId}></EachPostContainer>
    </div>
  );
};

export default BoardDetailPage;
