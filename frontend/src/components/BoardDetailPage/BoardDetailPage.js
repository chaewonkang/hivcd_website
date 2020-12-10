import React from "react";
import { EachPostContainer } from "../../containers";
import "./BoardDetailPage.css";

const BoardDetailPage = ({ match }) => {
  const { postId } = match.params;
  console.log(typeof postId);
  return (
    <div className="board_detail_page_container">
      <EachPostContainer postId={parseInt(postId, 10)}></EachPostContainer>
    </div>
  );
};

export default BoardDetailPage;
