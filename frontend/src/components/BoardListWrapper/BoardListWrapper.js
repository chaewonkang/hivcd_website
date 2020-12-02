import React from "react";
import "./BoardListWrapper.css";

const BoardListWrapper = ({ list, pageArray, page }) => {
  return (
    <div className="List">
      <div>
        {list
          ? list.map((el, key) => {
              return (
                <>
                  <div className="list_grid list_data" key={key}>
                    <div className="list_tag">
                      {" "}
                      <span>{el.title.slice(0, 5)}</span>
                    </div>
                    <div> {el.title.slice(0, 40)}... </div>
                    <div className="acenter"> 20.11.19 </div>
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