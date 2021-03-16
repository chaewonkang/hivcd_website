import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../../components";
import "./SearchResultContainer.css";
import getCookie from "../../utils/getCookie";
import logogif from "../../img/logogif.gif";

function SearchResultContainer({ searchKeyword }) {
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState(null);
  const [token] = useState(getCookie("csrftoken"));
  const [loading, setLoading] = useState(false);

  async function getSearchResult(searchKeyword, token) {
    await axios
      .get(
        "https://sidi.hongik.ac.kr/api/v1/postings/",
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
              return null;
            })
            .filter((result) => {
              if (
                result.category === 0 ||
                result.category === 1 ||
                result.category === 2 ||
                result.category === 3 ||
                result.category === 4
              )
                return result;
              return null;
            })
            .map((data) => {
              return (
                <Post
                  key={data.pk}
                  title={data.title}
                  id={data.pk}
                  date={data.updated}
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

  if (loading)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );
  if (error)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );

  return (
    <div className="search_result_container">
      <div className="search_result_wrapper">
        {searchKeyword === "" || searchKeyword === null
          ? "검색어를 입력하세요."
          : postList}
      </div>
    </div>
  );
}

export default SearchResultContainer;
