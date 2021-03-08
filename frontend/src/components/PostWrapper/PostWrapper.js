import React from "react";
import "./PostWrapper.css";

const PostWrapper = ({ children, dimensions }) => {
  return (
    <div
      className="postwrapper"
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {children}
    </div>
  );
};

export default PostWrapper;
