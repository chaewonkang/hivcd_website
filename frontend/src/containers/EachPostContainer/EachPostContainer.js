import React, { Component } from "react";
import { EachPostWrapper, EachPostNavigator, EachPost } from "../../components";
import * as service from "../../services/post";
import axios from "axios";

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
    };
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  getPost(postId) {
    return axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
  }

  getComments(postId) {
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true,
    });
    const info = await Promise.all([
      this.getPost(postId),
      this.getComments(postId),
    ]);

    const { title, body } = info[0].data;
    const comments = info[1].data;

    this.setState({
      postId,
      post: {
        title,
        body,
      },
      comments,
      fetching: false,
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
    const { postId, fetching, post, comments } = this.state;
    return (
      <EachPostWrapper>
        <EachPost
          title={post.title}
          body={post.body}
          comments={comments}
        ></EachPost>
        <EachPostNavigator
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigateClick}
        ></EachPostNavigator>
      </EachPostWrapper>
    );
  }
}

export default EachPostContainer;
