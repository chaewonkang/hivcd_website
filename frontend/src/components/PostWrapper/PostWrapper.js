import React, { useState } from "react";
import "./PostWrapper.css";

const PostWrapper = ({ children, dimensions }) => {
  return (
    <div
      className="postwrapper"
      style={{
        width: dimensions.width * 0.6 - 10 + "px",
        height: dimensions.height - 50 + "px",
      }}
    >
      {children}
    </div>
  );
};

export default PostWrapper;
