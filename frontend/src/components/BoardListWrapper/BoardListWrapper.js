import React from "react";
import "./BoardListWrapper.css";
import { useHistory } from "react-router-dom";

const BoardListWrapper = ({ list, pageArray, page }) => {
  let history = useHistory();

  return (
    <div className="board_list_container">
      <div>
        {list
          ? list.map((el, key) => {
              return (
                <>
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
                </>
              );
            })
          : null}
      </div>
      <div className="paging_div">
        {" "}
        <div>＜</div>
        <div>
          <ul>
            {pageArray
              ? pageArray.map((el, key) => {
                  return el === page ? (
                    <li key={key} className="page_num">
                      {" "}
                      <b> {el} </b>{" "}
                    </li>
                  ) : (
                    <li
                      key={key}
                      className="page_num"
                      onClick={() => this._changePage(el)}
                    >
                      {" "}
                      {el}{" "}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <div>＞</div>
      </div>
    </div>
  );
};

export default BoardListWrapper;
