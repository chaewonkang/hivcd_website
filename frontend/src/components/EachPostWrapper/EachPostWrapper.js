import React from "react";
import "./EachPostWrapper.css";

const EachPostWrapper = ({ children, style }) => {
  return (
    <div className="temp_EachPostWrapper" style={style}>
      {children}
    </div>
  );
};

export default EachPostWrapper;
