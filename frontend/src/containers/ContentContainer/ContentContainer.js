import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import {
  PostWrapper,
  Post,
  HomeArchive,
  Calandar,
  Equipment,
  Classroom,
  LogoImage,
} from "../../components";
import { ArchiveWrapper } from "../../components";
import "./ContentContainer.css";

class ContentContainer extends Component {
  state = {
    postId: 1,
    loadingPost: false,
    loadingArchive: false,
    postList: [],
    archiveList: [],
    items: 20,
    preItems: 0,
  };

  componentWillMount() {}

  componentDidMount() {
    // this.fetchPostInfo(1);
    this._loadPost();
    this._loadArchive();
    // window.addEventListener('scroll', this._infiniteScroll);
  }

  //   componentWillUnmount() {
  // 	  window.removeEventListener("scroll", this.infiniteScroll);
  //   }

  _loadPost = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        this.setState({
          ...this.state,
          loadingPost: true,
          postList: data,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          loadingPost: false,
        });
      });
  };

  _loadArchive = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        this.setState({
          ...this.state,
          loadingArchive: true,
          archiveList: data,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          loadingArchive: false,
        });
      });
  };

  render() {
    const { postList, archiveList } = this.state;
    const latestArchiveList = archiveList.slice(0, 6);
    const latestPostList = postList.slice(0, 20);
    return (
      <Router>
        <div className="contentcontainer">
          <PostWrapper>
            <LogoImage></LogoImage>

            {latestPostList &&
              latestPostList.map((post) => {
                return <Post title={post.title} id={post.id}></Post>;
              })}
            <Classroom></Classroom>
            <Calandar
              onClick={() => console.log("Calandar Module Clicked!")}
            ></Calandar>
            <Equipment></Equipment>
          </PostWrapper>
          <ArchiveWrapper>
            {latestArchiveList &&
              latestArchiveList.map((post) => {
                return (
                  <HomeArchive
                    title={post.title}
                    id={post.id}
                    thumbnailUrl={post.thumbnailUrl}
                  ></HomeArchive>
                );
              })}
          </ArchiveWrapper>
        </div>
        <main></main>
      </Router>
    );
  }
}

export default ContentContainer;
