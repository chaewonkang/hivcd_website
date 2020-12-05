import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Post, LogoImage, BoardPostWrapper } from "../../components";
import axios from "axios";

class Board extends Component {
  state = {
    postId: 1,
    loading: false,
    postList: [],
    items: 20,
    preItems: 0,
  };

  UNSAFE_componentWillMount() {}

  componentDidMount() {
    // this.fetchPostInfo(1);
    this._loadPost();

    window.addEventListener("scroll", this._infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  _loadPost = async () => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get("https://https://hivcdapp.azurewebsites.net/api/v1/postings")
      .then(({ data }) => {
        this.setState({
          ...this.state,
          loading: true,
          postList: data,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  };
  render() {
    const { postList } = this.state;
    return (
      <Router>
        <div className="contentcontainer">
          <BoardPostWrapper>
            {postList &&
              postList.map((post) => {
                return (
                  <>
                    <Post title={post.title} id={post.id}></Post>
                  </>
                );
              })}
            <LogoImage></LogoImage>
          </BoardPostWrapper>
        </div>
      </Router>
    );
  }
}

export default Board;
