import React, { Component } from "react";
import axios from "axios";
import { Post } from "../../components";
import "./SearchResultContainer.css";
import getCookie from "../../utils/getCookie";

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: this.props.searchKeyword,
      postList: [],
      archiveList: [],
      token: getCookie("csrftoken"),
    };
  }

  componentDidMount() {
    this._loadPost();
  }

  _loadPost = async () => {
    axios
      .get(
        "http://13.125.84.10:8000/api/v1/postings/",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            Accept: "application/json",
            "X-CSRFToken": this.state.token,
            "Content-type": "application/json",
          },
        }
      )
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
    console.log(
      `searchResultContainer's searchKeyword: ${this.state.searchKeyword}`
    );
    const { postList } = this.state;

    let items;
    if (items) {
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
              category={data.category}
            ></Post>
          );
        });
    }

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
