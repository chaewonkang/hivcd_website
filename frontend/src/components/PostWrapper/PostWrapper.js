import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import "./PostWrapper.css";

const PostWrapper = ({ children }) => {
  return <div className="postwrapper">{children}</div>;
};

export default PostWrapper;
