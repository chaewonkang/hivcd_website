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
    this._loadPost();
  }

  _loadPost = async () => {
    axios
      .get("http://13.125.84.10:8000/api/v1/postings/?format=json")
      .then(({ data }) => {
        this.setState({
          ...this.state,
          loadingPost: true,
          postList: data.reverse(),
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
    return (
      <div className="contentcontainer">
        <PostWrapper>
          {latestPostList ? <LogoImage></LogoImage> : null}
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
          <Post
            key={100}
            title="Hello"
            date="20202020202020"
            category={1}
            id={100}
          ></Post>
          <Post
            key={100}
            title="Hello"
            date="20202020202020"
            category={1}
            id={100}
          ></Post>
          <Post
            key={100}
            title="Hello"
            date="20202020202020"
            category={1}
            id={100}
          ></Post>
          <Post
            key={100}
            title="Hello"
            date="20202020202020"
            category={1}
            id={100}
          ></Post>
          <Post
            key={100}
            title="Hello"
            date="20202020202020"
            category={1}
            id={100}
          ></Post>
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
                  link={post.link}
                ></HomeArchive>
              );
            })}
        </ArchiveWrapper>
      </div>
    );
  }
}

export default ContentContainer;
