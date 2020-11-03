import React, { Component } from "react";
import {
  PostWrapper,
  Post,
  HomeArchive,
  Calandar,
  Equipment,
  Classroom,
  PostContainer,
} from "../../components";
import { ArchiveWrapper } from "../../components";
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
  let ret = [];

  // 랜덤 색상 반환
  return (ret = [colors[random], borderColors[random]]);
}

const retColor = getRandomColor();
console.log(retColor);

class ContentContainer extends Component {
  state = {
    color: "#000000",
    borderColor: "#000000",
  };
  componentDidMount() {
    this.setState({
      color: retColor[0],
      borderColor: retColor[1],
    });
  }
  render() {
    return (
      <div className="contentcontainer">
        <PostWrapper>
          <Post
            color={this.state.color}
            borderColor={this.state.borderColor}
          ></Post>

          <Classroom></Classroom>
          <Post
            color={this.state.color}
            borderColor={this.state.borderColor}
          ></Post>

          <Calandar></Calandar>
          <Post
            color={this.state.color}
            borderColor={this.state.borderColor}
          ></Post>
          <Post
            color={this.state.color}
            borderColor={this.state.borderColor}
          ></Post>

          <Equipment></Equipment>
          <Post
            color={this.state.color}
            borderColor={this.state.borderColor}
          ></Post>
        </PostWrapper>
        <ArchiveWrapper>
          <HomeArchive></HomeArchive>
          <HomeArchive></HomeArchive>
          <HomeArchive></HomeArchive>
          <HomeArchive></HomeArchive>
        </ArchiveWrapper>
      </div>
    );
  }
}

export default ContentContainer;
