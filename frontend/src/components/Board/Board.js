import React, { Component } from "react";
import { Post, LogoImage, BoardPostWrapper } from "../../components";
import axios from "axios";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: 1,
      loading: false,
      postList: [],
      items: 20,
      preItems: 0,
      boardFilter: 0,
    };
  }

  componentDidMount() {
    this._loadPost();
  }

  _loadPost = async () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/postings/?format=json")
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
    console.log(postList);
    const items = postList
      .filter((data) => {
        if (this.state.boardFilter === 0) return data;
        else if (data.title.includes(this.state.boardFilter)) return data;
        return;
      })
      .map((data) => {
        return (
          <Post
            key={data.pk}
            title={data.title}
            id={data.pk}
            date={data.created}
            category={data.category}
          ></Post>
        );
      });
    return (
      <div className="contentcontainer">
        <div className="board_filter_wrapper">
          <div className="board_filter_container">
            <button
              className="board_filter_option"
              onClick={() =>
                this.setState({
                  ...this.state,
                  boardFilter: 0,
                })
              }
            >
              ALL
            </button>
            <button
              className="board_filter_option"
              onClick={() =>
                this.setState({
                  ...this.state,
                  boardFilter: 1,
                })
              }
            >
              NOTICE
            </button>
            <button
              className="board_filter_option"
              onClick={() =>
                this.setState({
                  ...this.state,
                  boardFilter: 2,
                })
              }
            >
              EVENT
            </button>
            <button
              className="board_filter_option"
              onClick={() =>
                this.setState({
                  ...this.state,
                  boardFilter: 3,
                })
              }
            >
              JOB
            </button>
            <button
              className="board_filter_option"
              onClick={() =>
                this.setState({
                  ...this.state,
                  boardFilter: 4,
                })
              }
            >
              LOST&FOUND
            </button>
          </div>
        </div>
        <BoardPostWrapper>
          {items}
          <LogoImage></LogoImage>
        </BoardPostWrapper>
      </div>
    );
  }
}

export default Board;
