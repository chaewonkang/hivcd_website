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
      postId: 1,
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
    };
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  UNSAFE_componentWillMount() {
    this.getList();
    this.setPage();
  }

  getList() {
    return axios.get("https://jsonplaceholder.typicode.com/posts/");
  }

  getPost(postId) {
    return axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
  }

  getComments(postId) {
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }

  changePage(el) {
    this.setState({ page: el });
    window.sessionStorage.setItem("page", el);
  }

  setPage() {
    if (window.sessionStorage.page) {
      this.setState({ page: Number(window.sessionStorage.page) });
      return Number(window.sessionStorage.page);
    }

    this.setState({ page: 1 });
    return 1;
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true,
    });
    const info = await Promise.all([
      this.getPost(postId),
      this.getComments(postId),
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

    console.log(`Length is: ${dataNum}`);

    console.log(`pageArray is: ${pageArray}`);

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
    const postId = this.state.postId;

    if (type === "NEXT") {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };

  render() {
    const {
      postId,
      fetching,
      post,
      comments,
      list,
      pageArray,
      page,
      limit,
    } = this.state;
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
          ></EachPost>
        </EachPostWrapper>
      </div>
    );
  }
}

export default EachPostContainer;
