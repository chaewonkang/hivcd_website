import React, { useState } from "react";
import "./BoardListWrapper.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { EachPostWrapper, EachPost } from "../../components";

const BoardListWrapper = ({ list, postId }) => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const pageNumber = [];
  const postList = [list];
  const post = list[0];

  console.log(`boardListWrapper's postId: ${postId}`);
  console.log(post);
  console.log(typeof postId);

  console.log(`boardListWrapper's postList: ${list}`);
  console.log(postList);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = list.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="board_list_container">
        <div>
          {currentsPosts
            ? currentsPosts.map((el, key) => {
                return (
                  <React.Fragment key={key}>
                    <div
                      className="list_grid list_data"
                      key={key}
                      onClick={() => history.push(`/board/${key}`)}
                    >
                      <div className="list_tag">
                        {" "}
                        <span>{el.category}</span>
                      </div>
                      <div> {el.title.slice(0, 40)}... </div>
                      <div className="acenter"> {el.created.slice(2, 10)} </div>
                    </div>
                  </React.Fragment>
                );
              })
            : null}
        </div>
        <div className="paging_div">
          {" "}
          <div>＜</div>
          <div>
            <ul className="pagination">
              {pageNumber.map((pageNum) => (
                <li
                  key={pageNum}
                  className="page_num"
                  onClick={() => paginate(pageNum)}
                >
                  {pageNum}
                </li>
              ))}
            </ul>
          </div>
          <div>＞</div>
        </div>
      </div>
    </>
  );
};

export default BoardListWrapper;
