import React, { useState } from "react";
import "./PostWrapper.css";

const PostWrapper = ({ children, dimensions }) => {
	const [widthAndHeight, setWidthAndHeight] = useState({
		width: dimensions.width * 0.6;
		height: dimensions.height
	})
  return (
    <div
      className="postwrapper"
      style={{ width: widthAndHeight.width, height: widthAndHeight.height }}
    >
      {children}
    </div>
  );
};

export default PostWrapper;
