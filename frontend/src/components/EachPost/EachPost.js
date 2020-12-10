import React, { Component } from "react";
import "./EachPost.css";
import { CommentList, EachPostNavigator } from "../../components";

class EachPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        color: null,
        borderColor: null,
      },
    };
  }
  UNSAFE_componentWillMount() {
    const colorArray = [
      "#A3B3C4",
      "#00F5C6",
      "#93F421",
      "#9452FF",
      "#FDFBC1",
      "#BC791E",
      "#00C4FF",
      "#FF3333",
      "#FF01FF",
      "#DEADF0",
      "#9099FF",
      "#3EA455",
      "#FECC99",
      "#959B01",
      "#CDCC33",
    ];

    const borderColorArray = [
      "#78A4B7",
      "#47D2DD",
      "#64CB0C",
      "#6E12D6",
      "#CFD372",
      "#935B0F",
      "#094EFF",
      "#B74A6C",
      "#E00000",
      "#BB12D8",
      "#6F55FF",
      "#0F7946",
      "#FD9191",
      "#6F55FF",
      "#A8B419",
    ];

    const randomIndex = Math.floor(Math.random() * 15);

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
    const { title, body, comments, handleNavigateClick, postId } = this.props;
    const style = {
      backgroundColor: this.state.style.color,
      border: `2px solid ${this.state.style.borderColor}`,
    };
    return (
      <div className="each_post_wrapper" style={style}>
        <div className="each_post">
          {" "}
          <div className="each_post_tag">EVENT</div>
          <h1>{title}</h1>
          <hr style={{ marginBottom: 1 + "em" }}></hr>
          <div className="each_post_info">
            <span>작성자 ▪︎ 조교실</span>
            <span>작성일 ▪︎ 2020.10.26</span>
            <span>조회 ▪︎ 362</span>
          </div>
          <hr></hr>
          <div className="each_post_files">
            <span className="attached_file">
              첨부파일 ▪︎ 11월 10일 지하루_1.png
            </span>
            <button className="download_button">DOWNLOAD</button>
          </div>
          <hr style={{ marginBottom: 2 + "em" }}></hr>
          <p>
            {body}
            {body}
            {body}
            {body}
            <br></br>
            {body}
            {body}
            {body}
            {body}
            <br></br>
            {body}
            {body}
          </p>
          <hr style={{ marginBottom: 2 + "em", marginTop: 2 + "em" }}></hr>
          <CommentList comments={comments} style={style}></CommentList>
          <EachPostNavigator
            handleNavigateClick={handleNavigateClick}
            postId={postId}
          ></EachPostNavigator>
        </div>
      </div>
    );
  }
}

export default EachPost;
