import React, { Component } from "react";
import { BoardListWrapper } from "../../components";
import axios from "axios";
import "./EachPostContainer.css";
import getCookie from "../../utils/getCookie";
import { Redirect } from "react-router-dom";
import NotFoundContainer from "../NotFoundContainer/NotFoundContainer";

class EachPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      post: {
        title: null,
        text: null,
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
      commentInput: {
        text: null,
        author: null,
        post: 0,
      },
      csrftoken: getCookie("csrftoken"),
    };
  }

  componentDidMount() {
    this.fetchPostInfo(this.props.match.params.postId);
  }

  getList() {
    return axios.get(
      "http://13.125.84.10:8000/api/v1/postings/?format=json",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          Accept: "application/json",
          "X-CSRFToken": this.state.token,
          "Content-type": "application/json",
        },
      }
    );
  }

  getPost(postId) {
    return axios.get(
      "http://13.125.84.10:8000/api/v1/postings/" + postId + "/?format=json",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          Accept: "application/json",
          "X-CSRFToken": this.state.token,
          "Content-type": "application/json",
        },
      }
    );
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true,
    });

    try {
      const info = await Promise.all([
        this.getPost(this.props.match.params.postId),
        this.getList(),
      ]);

      const { title, text } = info[0].data;
      const comments = info[0].data.comments;
      const list = info[1].data;
      const author = info[0].data.author;
      const date = info[0].data.created;
      const dataNum = list.length;
      const limit = this.state.limit;
      const pageArray = [];
      const category = info[0].data.category;

      for (let i = 1; i <= Math.ceil(dataNum / limit); i++) {
        pageArray.push(i);
      }
      this.setState({
        ...this.state,

        fetching: false,
        post: {
          title,
          text,
          author,
          date,
        },
        comments,
        list,
        pageArray,
        category,
      });
    } catch (e) {
      this.setState({
        ...this.state,
        fetching: false,
      });
      console.log("error occurred", e);
    }
  };

  handleNavigateClick = (type) => {
    if (type === "NEXT") {
      this.fetchPostInfo(parseInt(this.state.postId) + 1);
    } else {
      this.fetchPostInfo(parseInt(this.state.postId) - 1);
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
    const { list } = this.state;
    // const token = localStorage.getItem("access_token");
    const validRet = (
      //   token === null ? (
      //     <NotFoundContainer></NotFoundContainer>
      //   ) : (
      <div className="each_post_container">
        <BoardListWrapper
          list={list}
          postId={this.props.match.params.postId}
          handleNavigateClick={this.handleNavigateClick}
          onPostComment={this.postComment}
          showWarning={this.showWarning}
          fetching={this.state.fetching}
        ></BoardListWrapper>
        );
        <div>{/* {this.props.match.params.postId} {post.title} */}</div>
      </div>
    );

    return validRet;
  }
}

export default EachPostContainer;
