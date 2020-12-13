import React, { Component } from "react";
import "./EachPost.css";
import { EachPostNavigator, CommentList } from "../../components";
import axios from "axios";

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
    };
  }

  getEachPost = (postId) => {
    axios
      .get("http://127.0.0.1:8000/api/v1/postings/" + postId + "/?format=json")
      .then(({ data }) => {
        // console.log(`hellohello: ${data.comments}`);
        this.setState({
          ...this.state,
          loading: true,
          eachPost: data,
          fileUrl: data.files[0]["files"],
          fileName: data.files[0]["name"],
          comments: data["comments"],
        });
        console.log(this.state.comments);
        console.log(typeof this.state.comments);
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  };

  //   getComments = async (postId) => {
  //     return axios
  //       .get("http://127.0.0.1:8000/api/v1/postings/" + postId + "/comments/")
  //       .then(({ data }) => {
  //         data.filter((el) => {
  //           if (el.post === postId) return data;
  //         });
  //         this.setState({
  //           ...this.state,
  //           comments: data,
  //         });
  //       });
  //   };

  postComment = async (postId, e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/v1/postings/" + postId + "/comments/",
        this.state.commentInput
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getEachPost(this.props.postId);
    // this.getComments(this.props.postId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.postId !== prevProps.postId) {
      this.getEachPost(this.props.postId);
      //   this.getComments(this.props.postId);
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

    // console.log(typeof this.state.comments);
    // console.log(`each post's postId: ${postId}`);
    // console.log(this.state.eachPost.files[0]["files"]);
    // console.log(this.state.eachPost.files);
    // console.log(attachedfile);
    // console.log(typeof attachedfile);

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
          {/* <CommentList
            comments={commentsArray}
            style={style}
            onPostComment={this.props.onPostComment}
          ></CommentList> */}
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
