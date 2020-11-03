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
    return (
      <div className="">
        <div className="post" style={style} ref={(ref) => (this.myRef = ref)}>
          <div className="post_tag">
            <span>board</span>
          </div>
          <div className="post_content">
            <h2 className="post_content_header">
              {" "}
              미술대학 시각디자인과, 한국디자인학회 대학생학술대회 우수논문상,
              장려상 수상 <br></br>
              {/* color: {this.state.color} */}
            </h2>
            <span className="post_content_date">2020.07.15</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
