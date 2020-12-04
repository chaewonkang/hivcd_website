import React from "react";
import "./EachPostNavigator.css";

const EachPostNavigator = ({
  onClick,
  postId,
  disabled,
  handleNavigateClick,
}) => {
  return (
    <div className="each_post_navigator_container">
      <div className="each_post_navigator">
        <button
          className="navigate_left_button"
          onClick={() => handleNavigateClick("PREV")}
        >
          ＜
        </button>
        <button
          className="navigate_right_button"
          onClick={() => handleNavigateClick("NEXT")}
        >
          ＞
        </button>
      </div>
    </div>
  );
};

export default EachPostNavigator;
