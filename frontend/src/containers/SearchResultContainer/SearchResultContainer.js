import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../../components";
import "./SearchResultContainer.css";
import getCookie from "../../utils/getCookie";

function SearchResultContainer({ searchKeyword }) {
  const [postList, setPostList] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(error);

  useEffect(() => {
    setToken(getCookie("csrftoken"));
    loadPost();
  });

  const loadPost = async () => {
    axios
      .get(
        "http://13.125.84.10:8000/api/v1/postings/",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            Accept: "application/json",
            "X-CSRFToken": token,
            "Content-type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        setLoading(true);
        postList(data);
      })
      .catch((e) => {
        setError(e);
        console.log(error);
      });
  };

  const listed = postList
    .filter((data) => {
      if (this.state.searchKeyword === null) return data;
      else if (data.title.toLowerCase().includes(this.state.searchKeyword))
        return data;
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

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div className="search_result_container">
      <div className="search_result_wrapper">
        {searchKeyword === "" || listed === null
          ? "검색어를 입력하세요."
          : listed}
      </div>
    </div>
  );
}

export default SearchResultContainer;
