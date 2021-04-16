import React, { useState } from "react";
import "./BoardListWrapper.css";
import { useHistory } from "react-router-dom";
import { EachPostWrapper } from "../../components";

function BoardListWrapper({ list, postId, curLoc, category }) {
  let history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const pageNumber = [];

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
          {curLoc.includes("board")
            ? currentsPosts
                .filter((data) => {
                  if (category === 0) return data;
                  else if (data.category === category) return data;
                  return null;
                })
                .map((el, key) => {
                  let categoryName = null;
                  if (el.category === 1) categoryName = "소식";
                  else if (el.category === 2) categoryName = "학과 공지";
                  else if (el.category === 3) categoryName = "행사/홍보";
                  else if (el.category === 4) categoryName = "구인구직";
                  else if (el.category === 5) categoryName = "분실물";
                  return (
                    <React.Fragment key={key}>
                      <div
                        className="list_grid list_data"
                        key={key}
                        onClick={() => history.push(`/board/${el.pk}`)}
                      >
                        <div className="list_tag">
                          <span>{categoryName}</span>
                        </div>
                        <div className="board_list_title">{el.title}</div>
                        <div className="acenter">
                          {" "}
                          {el.created_at.slice(2, 10)}{" "}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
            : null}
          {curLoc.includes("exhibition")
            ? currentsPosts.map((el, key) => {
                let categoryName = null;
                if (el.category === 6) categoryName = "졸업 주간";
                else if (el.category === 7) categoryName = "와우영상제";
                else if (el.category === 8) categoryName = "소모임";
                return (
                  <React.Fragment key={key}>
                    <div
                      className="list_grid list_data"
                      key={key}
                      onClick={() => history.push(`/exhibition/${el.pk}`)}
                    >
                      <div className="list_tag">
                        <span>{categoryName}</span>
                      </div>
                      <div className="board_list_title">{el.title}</div>
                      <div className="acenter">
                        {" "}
                        {el.created_at.slice(2, 10)}{" "}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            : null}
          {curLoc.includes("announce")
            ? currentsPosts
                .filter((data) => {
                  if (category === 0) return data;
                  else if (data.category === category) return data;
                  return null;
                })
                .map((el, key) => {
                  let categoryName = null;
                  if (el.category === 9) categoryName = "생활";
                  else if (el.category === 10) categoryName = "정보";
                  else if (el.category === 11) categoryName = "학사";
                  return (
                    <React.Fragment key={key}>
                      <div
                        className="list_grid list_data"
                        key={key}
                        onClick={() => history.push(`/announce/${el.pk}`)}
                      >
                        <div className="list_tag">
                          <span>{categoryName}</span>
                        </div>
                        <div className="board_list_title">{el.title}</div>
                        <div className="acenter">
                          {" "}
                          {el.created_at.slice(2, 10)}{" "}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
            : null}
        </div>
        <div className="paging_div">
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
        </div>
      </div>
      <EachPostWrapper postId={postId} curLoc={curLoc}></EachPostWrapper>
    </>
  );
}

export default BoardListWrapper;
