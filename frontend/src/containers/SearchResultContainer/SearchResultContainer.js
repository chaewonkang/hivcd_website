import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../../components";
import "./SearchResultContainer.css";
import getCookie from "../../utils/getCookie";

function SearchResultContainer({ searchKeyword }) {
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState(null);
  const [token] = useState(getCookie("csrftoken"));
  const [loading, setLoading] = useState(false);

  async function getSearchResult(searchKeyword, token) {
    await axios
      .get(
        "http://sidi.hongik.ac.kr/api/v1/postings/",
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
      .then((response) => {
        setLoading(true);
        setPostList(
          response.data
            .filter((result) => {
              if (searchKeyword === null) return result;
              else if (result.title.toLowerCase().includes(searchKeyword))
                return result;
            })
            .map((data) => {
              return (
                <Post
                  key={data.pk}
                  title={data.title}
                  date={data.updated}
                  id={data.pk}
                  category={data.category}
                ></Post>
              );
            })
        );
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }

  useEffect(() => {
    getSearchResult(searchKeyword, token);
  }, [searchKeyword, token]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생...</div>;

  return (
    <div className="search_result_container">
      {searchKeyword !== null ? <div>검색어: {searchKeyword}</div> : null}
      <div className="search_result_wrapper">
        {searchKeyword === "" || searchKeyword === null
          ? "검색어를 입력하세요."
          : postList}
      </div>
    </div>
  );
}

export default SearchResultContainer;
