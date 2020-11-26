import React from "react";
import { EachPostContainer } from "../../containers";
import "./BoardDetailPage.css";

const BoardDetailPage = ({ children }) => {
  return (
    <div className="board_detail_page_container">
      <div>BoardListingPage</div>
      <EachPostContainer></EachPostContainer>
    </div>
  );
};

export default BoardDetailPage;
