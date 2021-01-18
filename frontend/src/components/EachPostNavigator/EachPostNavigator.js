import React from "react";
import "./EachPostNavigator.css";
import { useHistory } from "react-router-dom";

const EachPostNavigator = ({ postId, handleNavigateClick }) => {
  let history = useHistory();
  let id = parseInt(postId, 10);
  function routeToPrevPost(id) {
    id = id - 1;
    if (id > 0) {
      history.push(`/board/${id}`);
    }
    handleNavigateClick("PREV", postId);
  }
  function routeToNextPost(id) {
    id = id + 1;
    history.push(`/board/${id}`);
    handleNavigateClick("NEXT", postId);
  }
  return (
    <div className="each_post_navigator_container">
      <div className="each_post_navigator">
        <button
          className="navigate_left_button"
          onClick={() => routeToPrevPost(id)}
        >
          ＜
        </button>
        <button
          className="navigate_right_button"
          onClick={() => routeToNextPost(id)}
        >
          ＞
        </button>
      </div>
    </div>
  );
};

export default EachPostNavigator;
