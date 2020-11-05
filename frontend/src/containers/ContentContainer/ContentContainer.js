import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import {
  PostWrapper,
  Post,
  HomeArchive,
  Calandar,
  Equipment,
  Classroom,
  LogoImage,
  CalandarContainer,
} from "../../components";
import { ArchiveWrapper } from "../../components";
import * as service from "../../services/post";
import "./ContentContainer.css";

function getRandomColor() {
  const colors = [
    "#CDCC33",
    "#FFCC99",
    "#FF01FF",
    "#729B00",
    "#9099FF",
    "#FF3333",
  ];

  const borderColors = [
    "#A8B419",
    "#FF9191",
    "#E00000",
    "#19A300",
    "#6F55FF",
    "#8C0091",
  ];

  // 0 부터 12까지 랜덤 숫자
  const random = Math.floor(Math.random() * 6);
  let ret;

  // 랜덤 색상 반환
  return (ret = [colors[random], borderColors[random]]);
}

const retColor = getRandomColor();
console.log(retColor);

class ContentContainer extends Component {
  state = {
    color: "#000000",
    borderColor: "#000000",
    postId: 1,
    fetching: false,
    post: {
      title: null,
      id: null,
    },
  };

  componentWillMount() {
    this.setState({
      color: retColor[0],
      borderColor: retColor[1],
    });
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true, // requesting..
    });
    const info = await Promise.all([service.getPost(postId)]);

    const { title, id } = info[0].data;

    this.setState({
      ...this.state,
      postId,
      post: {
        title,
        id,
      },
      fetching: false, // done!
    });
    console.log(info);
  };
  render() {
    return (
      <Router>
        <div className="contentcontainer">
          <PostWrapper>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <LogoImage></LogoImage>

            <Classroom></Classroom>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>

            <div>
              <Link to="/calandar">
                <Calandar></Calandar>
              </Link>
            </div>

            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <LogoImage></LogoImage>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <LogoImage></LogoImage>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <Equipment></Equipment>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <Post
              color={this.state.color}
              borderColor={this.state.borderColor}
              title={this.state.post.title}
              id={this.state.post.id}
            ></Post>
            <LogoImage></LogoImage>
          </PostWrapper>
          <ArchiveWrapper>
            <HomeArchive></HomeArchive>
            <HomeArchive></HomeArchive>
            <HomeArchive></HomeArchive>
            <HomeArchive></HomeArchive>
          </ArchiveWrapper>
        </div>
        <main>
          <Route path="/calandar" component={CalandarContainer} />
        </main>
      </Router>
    );
  }
}

export default ContentContainer;
