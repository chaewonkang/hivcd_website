import React, { useState } from "react";
import "./BoardListWrapper.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { EachPostWrapper } from "../../components";

const BoardListWrapper = ({
  list,
  postId,
  title,
  body,
  comments,
  handleNavigateClick,
  category,
  author,
  date,
  onPostComment,
}) => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [currentPost, setCurrentPost] = useState(0);
  const pageNumber = [];
  const postList = [list];
  const post = list[0];
  const [rePostId, setRePostId] = useState(postId);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = list.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const rePostIdSet = (postId) => {
    setCurrentPost(postId);
    setRePostId(postId);
  };

  return (
    <>
      <div className="board_list_container">
        <div>
          {currentsPosts
            ? currentsPosts.map((el, key) => {
                let categoryName = null;
                if (el.category === 1) categoryName = "NOTICE";
                else if (el.category === 2) categoryName = "EVENT";
                else if (el.category === 3) categoryName = "JOB";
                else if (el.category === 4) categoryName = "LOST&FOUND";
                else if (el.category === 5)
                  categoryName = "GRADUATION EXHIBITION";
                else if (el.category === 6) categoryName = "WOW FILM FESTIVAL";
                else if (el.category === 7) categoryName = "ETC";
                return (
                  <React.Fragment key={key}>
                    <div
                      className="list_grid list_data"
                      key={key}
                      onClick={() => history.push(`/board/${key}`)}
                    >
                      <div className="list_tag">
                        {" "}
                        <span>{categoryName.slice(0, 4)}...</span>
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
      <EachPostWrapper
        title={title}
        body={body}
        comments={comments}
        handleNavigateClick={handleNavigateClick}
        category={category}
        author={author}
        date={date}
        onPostComment={onPostComment}
      ></EachPostWrapper>
    </>
  );
};

export default BoardListWrapper;
