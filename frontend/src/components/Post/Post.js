import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    console.log("contructor()");
    this.state = {
      number: 0,
      color: null,
      borderColor: null,
    };
  }
  myRef = null;

  render() {
    const style = {
      backgroundColor: this.props.color,
      border: `2px solid ${this.props.borderColor}`,
    };
    const { title, id } = this.props;
    return (
      <div className="">
        <div className="post" style={style} ref={(ref) => (this.myRef = ref)}>
          <div className="post_tag">
            <span>board</span>
          </div>
          <div className="post_content">
            <h2 className="post_content_header">
              title: {title}
              {/* color: {this.state.color} */}
            </h2>
            <span className="post_content_date">date: {id}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
