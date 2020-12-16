import React, { Component } from "react";
import "./EachPost.css";
import { EachPostNavigator, CommentList, Warning } from "../../components";
import axios from "axios";
import getCookie from "../../utils/getCookie";

class EachPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        color: null,
        borderColor: null,
      },
      eachPost: {},
      files: null,
      token: getCookie("csrftoken"),
    };
  }

  showWarning = () => {
    this.setState({
      ...this.state,
      warningVisibility: true,
    });

    // after 1.5 sec

    setTimeout(() => {
      this.setState({
        ...this.state,
        warningVisibility: false,
      });
    }, 1500);
  };

  getEachPost = (postId) => {
    axios
      .get(
        "http://127.0.0.1:8000/api/v1/postings/" + postId,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            Accept: "application/json",
            "X-CSRFToken": this.state.token,
            "Content-type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        // console.log(`hellohello: ${data.comments}`);
        this.setState({
          ...this.state,
          loading: true,
          eachPost: data,
          fileUrl: data.files[0]["files"],
          fileName: data.files[0]["name"],
          comments: data.comments,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          loading: false,
        });
        this.showWarning();
      });
  };

  componentDidMount() {
    this.getEachPost(this.props.postId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.postId !== prevProps.postId) {
      this.getEachPost(this.props.postId);
    }
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
      ...this.state,
      style: {
        ...this.state.style,
        color: selectedColor,
        borderColor: selectedBorderColor,
      },
    });
  }

  render() {
    const { handleNavigateClick, postId } = this.props;
    const title = this.state.eachPost.title;
    const body = this.state.eachPost.text;
    const category = this.state.eachPost.category;
    const author = this.state.eachPost.author;
    const date = this.state.eachPost.created;
    const attachedfile = this.state.fileUrl;
    const fileName = this.state.fileName;
    console.log(this.state.token);

    const style = {
      backgroundColor: this.state.style.color,
      border: `2px solid ${this.state.style.borderColor}`,
    };
    let categoryName = null;
    if (category === 1) categoryName = "BOARD / NOTICE";
    else if (category === 2) categoryName = "BOARD / EVENT";
    else if (category === 3) categoryName = "BOARD / JOB";
    else if (category === 4) categoryName = "BOARD / LOST&FOUND";
    else if (category === 5)
      categoryName = "EXHIBITION / GRADUATION EXHIBITION";
    else if (category === 6) categoryName = "EXHIBITION / WOW FILM FESTIVAL";
    else if (category === 7) categoryName = "EXHIBITION / ETC";

    return (
      <div className="each_post_wrapper" style={style}>
        <div className="each_post">
          {" "}
          <div className="each_post_tag">{categoryName}</div>
          <h1>{title}</h1>
          <hr style={{ marginBottom: 1 + "em" }}></hr>
          <div className="each_post_info">
            <span>작성자 ▪︎ {author}</span>
            <span>작성일 ▪︎ {date}</span>
            <span>조회 ▪︎ 362</span>
          </div>
          <hr></hr>
          <div className="each_post_files">
            <span className="attached_file">첨부파일 ▪︎ {fileName}</span>
            <a
              href={attachedfile}
              target="_blank"
              download={attachedfile}
              rel="noopener noreferrer"
            >
              <button className="download_button">DOWNLOAD</button>
            </a>
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
          <CommentList
            comments={this.state.comments}
            style={style}
            onPostComment={this.onPostComment}
            postId={postId}
          ></CommentList>
          <EachPostNavigator
            handleNavigateClick={handleNavigateClick}
            postId={postId}
            navDisabled={this.state.warningVisibility}
          ></EachPostNavigator>
          <Warning
            visible={this.state.warningVisibility}
            message="마지막 게시물입니다."
          />
        </div>
      </div>
    );
  }
}

export default EachPost;
