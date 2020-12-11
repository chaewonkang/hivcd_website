import React, { Component } from "react";
import axios from "axios";
import { PostWrapper, Post, HomeArchive, LogoImage } from "../../components";
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

  componentDidMount() {
    // this.fetchPostInfo(1);
    this._loadPost();
    // window.addEventListener('scroll', this._infiniteScroll);
  }

  //   componentWillUnmount() {
  // 	  window.removeEventListener("scroll", this.infiniteScroll);
  //   }

  _loadPost = async () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/postings/")
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

  render() {
    const { postList } = this.state;
    const latestArchiveList = postList
      .filter(
        (data) =>
          data.category === 5 || data.category === 6 || data.category === 7
      )
      .slice(0, 6);
    const latestPostList = postList
      .filter(
        (data) =>
          data.category === 1 ||
          data.category === 2 ||
          data.category === 3 ||
          data.category === 4
      )
      .slice(0, 20);
    console.log(`latestArchiveList: ${latestArchiveList}`);
    return (
      <div className="contentcontainer">
        <PostWrapper>
          <LogoImage></LogoImage>
          {latestPostList &&
            latestPostList.map((post) => {
              return (
                <Post
                  key={post.pk}
                  title={post.title}
                  date={post.created}
                  category={post.category}
                  id={post.pk}
                ></Post>
              );
            })}
        </PostWrapper>
        <ArchiveWrapper>
          {latestArchiveList &&
            latestArchiveList.map((post) => {
              return (
                <HomeArchive
                  key={post.id}
                  title={post.title}
                  id={post.id}
                  date={post.created}
                  category={post.category}
                  thumbnailUrl={post.photos[0].photo}
                ></HomeArchive>
              );
            })}
        </ArchiveWrapper>
      </div>
    );
  }
}

export default ContentContainer;
