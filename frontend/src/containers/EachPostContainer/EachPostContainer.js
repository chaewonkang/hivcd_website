import React, { useState, useEffect } from "react";
import { BoardListWrapper } from "../../components";
import axios from "axios";
import "./EachPostContainer.css";
import getCookie from "../../utils/getCookie";

function EachPostContainer({ match }) {
  const [post, setPost] = useState({
    title: null,
    text: null,
    author: null,
    date: null,
    category: 0,
  });
  const [list, setList] = useState([]);
  const [pageArray, setPageArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const getList = () => {
    return axios.get(
      "http://13.125.84.10:8000/api/v1/postings/?format=json",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          Accept: "application/json",
          "X-CSRFToken": token,
          "Content-type": "application/json",
        },
      }
    );
  };

  const getPost = (postId) => {
    return axios.get(
      `http://13.125.84.10:8000/api/v1/postings/${postId}/?format=json`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          Accept: "application/json",
          "X-CSRFToken": this.state.token,
          "Content-type": "application/json",
        },
      }
    );
  };

  const handleNavigateClick = (type) => {
    if (type === "NEXT") {
      fetchPostInfo(parseInt(match.params.postId) + 1);
    } else {
      fetchPostInfo(parseInt(match.params.postId) - 1);
    }
  };

  const fetchPostInfo = async (postId) => {
    setLoading(true);
    try {
      const info = await Promise.all([getPost(match.params), getList()]);

      const { title, text } = info[0].data;
      const list = info[1].data;
      const author = info[0].author;
      const date = info[0].data.created;
      const dataNum = list.length;
      const category = info[0].data.category;

      for (let i = 1; i <= Math.ceil(dataNum / 25); i++) {
        pageArray.push(i);
      }

      setLoading(false);
      setPost({ ...post, title, text, author, date, category });
      setList(list);
      setPageArray(pageArray);
    } catch (e) {
      setError(e);
      console.log(error);
      setLoading(false);
      console.log("Error Occurred:", e);
    }
  };

  useEffect(() => {
    setToken(getCookie("csrftoken"));
    fetchPostInfo(match.params.postId);
  }, [match.params.postId]);

  return (
    <div className="each_post_container">
      <BoardListWrapper
        list={list}
        postId={match.params.postId}
        handleNavigateClick={handleNavigateClick}
        fetching={loading}
      ></BoardListWrapper>
    </div>
  );
}

export default EachPostContainer;
