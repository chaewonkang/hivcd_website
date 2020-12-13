import React from "react";
import "./EachPostNavigator.css";
import { useHistory } from "react-router-dom";

const EachPostNavigator = ({
  onClick,
  postId,
  disabled,
  handleNavigateClick,
}) => {
  let history = useHistory();
  let id = parseInt(postId, 10);
  //   console.log(`EachPostNavigator postId: ${postId}`);
  function routeToPrevPost() {
    id = id - 1;
    history.push(`/board/${id}`);
    handleNavigateClick("PREV");
  }
  function routeToNextPost() {
    id = id + 1;
    history.push(`/board/${id}`);
    handleNavigateClick("NEXT");
  }
  return (
    <div className="each_post_navigator_container">
      <div className="each_post_navigator">
        <button
          className="navigate_left_button"
          onClick={() => routeToPrevPost()}
        >
          ＜
        </button>
        <button
          className="navigate_right_button"
          onClick={() => routeToNextPost()}
        >
          ＞
        </button>
      </div>
    </div>
  );
};

export default EachPostNavigator;
