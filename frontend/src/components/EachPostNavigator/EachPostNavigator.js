import React from "react";
import "./EachPostNavigator.css";

const EachPostNavigator = ({ onClick, postId, disabled }) => {
  return (
    <div className="each_post_navigator_container">
      <div className="each_post_navigator">
        <button
          className="navigate_left_button"
          onClick={() => onClick("PREV")}
        >
          ←
        </button>
        <div className="navigate_page_num">{postId}</div>
        <button
          color="pink"
          icon="right arrow"
          labelPosition="right"
          className="navigate_right_button"
          onClick={() => onClick("NEXT")}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default EachPostNavigator;
