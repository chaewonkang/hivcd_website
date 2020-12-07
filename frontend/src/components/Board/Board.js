import React, { Component } from "react";
import { Post, LogoImage, BoardPostWrapper } from "../../components";
import axios from "axios";
import "./Board.css";

class Board extends Component {
  state = {
    postId: 1,
    loading: false,
    postList: [],
    items: 20,
    preItems: 0,
    boardFilter: null,
  };

  componentDidMount() {
    this._loadPost();
  }

  _loadPost = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
    const items = postList
      .filter((data) => {
        if (this.state.boardFilter === null) return data;
        else if (data.title.includes(this.state.boardFilter)) return data;
        return;
      })
      .map((data) => {
        return <Post key={data.id} title={data.title} id={data.id}></Post>;
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
                  boardFilter: null,
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
                  boardFilter: "est",
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
                  boardFilter: "quo",
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
                  boardFilter: "ut",
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
                  boardFilter: "quo",
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
