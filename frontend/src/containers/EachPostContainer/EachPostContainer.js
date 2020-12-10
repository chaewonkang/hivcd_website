import React, { Component } from "react";
import {
  EachPostWrapper,
  EachPostNavigator,
  EachPost,
  BoardListWrapper,
} from "../../components";
import axios from "axios";
import "./EachPostContainer.css";

class EachPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.postId,
      fetching: false,
      post: {
        title: null,
        body: null,
      },
      comments: [],
      list: [],
      page: 1,
      limit: 25,
      pageArray: [],
      style: {
        color: null,
        borderColor: null,
      },
    };
  }

  componentDidMount() {
    this.fetchPostInfo(1);
    console.log(`EachPostContainer's postId: ${this.state.postId}`);
  }

  getList() {
    return axios.get("http://127.0.0.1:8000/api/v1/postings/");
  }

  getPost(postId) {
    return axios.get("http://127.0.0.1:8000/api/v1/postings/" + postId);
  }

  getComments(postId) {
    return axios.get(
      "http://127.0.0.1:8000/api/v1/postings/comments/" + postId
    );
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true,
    });
    const info = await Promise.all([
      this.getPost(this.state.postId),
      this.getComments(this.state.postId),
      this.getList(),
    ]);

    const { title, body } = info[0].data;
    const comments = info[1].data;
    const list = info[2].data;
    const dataNum = list.length;
    const limit = this.state.limit;
    const pageArray = [];

    for (let i = 1; i <= Math.ceil(dataNum / limit); i++) {
      pageArray.push(i);
    }
    this.setState({
      ...this.state,
      postId,
      fetching: false,
      post: {
        title,
        body,
      },
      comments,
      list,
      pageArray,
    });
    console.log(info);
  };

  handleNavigateClick = (type) => {
    if (type === "NEXT") {
      this.fetchPostInfo(this.state.postId + 1);
    } else {
      this.fetchPostInfo(this.state.postId - 1);
    }
  };

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
    const {
      fetching,
      post,
      comments,
      list,
      pageArray,
      page,
      limit,
    } = this.state;
    const style = {
      backgroundColor: this.state.style.color,
      border: `2px solid ${this.state.style.borderColor}`,
    };
    return (
      <div className="each_post_container">
        <BoardListWrapper
          list={list.slice(0, limit)}
          pageArray={pageArray}
          page={page}
        ></BoardListWrapper>
        <EachPostWrapper>
          <EachPost
            title={post.title}
            body={post.body}
            comments={comments}
            handleNavigateClick={this.handleNavigateClick}
            postId={this.state.postId}
          ></EachPost>
        </EachPostWrapper>
      </div>
    );
  }
}

export default EachPostContainer;
