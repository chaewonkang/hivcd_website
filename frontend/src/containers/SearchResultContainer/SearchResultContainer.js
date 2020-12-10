import React, { Component } from "react";
import axios from "axios";
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
import "./SearchResultContainer.css";

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: this.props.searchKeyword,
      postList: [],
      archiveList: [],
    };
  }

  componentDidMount() {
    this._loadPost();
    this._loadArchive();
  }

  _loadPost = async () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/postings")
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
    console.log(
      `searchResultContainer's searchKeyword: ${this.state.searchKeyword}`
    );
    const { postList } = this.state;
    const items = postList
      .filter((data) => {
        if (this.state.searchKeyword === null) return data;
        else if (data.title.toLowerCase().includes(this.state.searchKeyword))
          return data;
        return;
      })
      .map((data) => {
        return (
          <Post
            key={data.pk}
            title={data.title}
            body={data.body}
            id={data.pk}
          ></Post>
        );
      });

    return (
      <div className="search_result_container">
        <div className="search_result_wrapper">
          {this.state.searchKeyword === "" || items === null
            ? "검색어를 입력하세요."
            : items}
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
