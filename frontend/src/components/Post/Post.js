import React, { Component } from "react";
import "./Post.css";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      key: null,
      style: {
        color: null,
        borderColor: null,
      },
    };
  }

  myRef = null;

  UNSAFE_componentWillMount() {
    const colorArray = [
      "#CDCC33",
      "#FFCC99",
      "#FF01FF",
      "#729B00",
      "#9099FF",
      "#FF3333",
    ];

    const borderColorArray = [
      "#A8B419",
      "#FF9191",
      "#E00000",
      "#19A300",
      "#6F55FF",
      "#8C0091",
    ];

    const randomIndex = Math.floor(Math.random() * 6);

    const selectedColor = colorArray[randomIndex];
    const selectedBorderColor = borderColorArray[randomIndex];

    this.setState({
      style: {
        ...this.state.style,
        color: selectedColor,
        borderColor: selectedBorderColor,
      },
    });
  }

  render() {
    const { title, id } = this.props;
    const style = {
      backgroundColor: this.state.style.color,
      border: `2px solid ${this.state.style.borderColor}`,
    };
    return (
      <div className="post" style={style} ref={(ref) => (this.myRef = ref)}>
        <div className="post_tag">
          <span>board</span>
        </div>
        <div className="post_content">
          <h2
            className="post_content_header"
            onClick={() => console.log("Post Title Clicked!")}
          >
            title: {title} <br></br>
            color: {this.state.color}
          </h2>
          <span className="post_content_date">date: {id}</span>
        </div>
      </div>
    );
  }
}

export default Post;
