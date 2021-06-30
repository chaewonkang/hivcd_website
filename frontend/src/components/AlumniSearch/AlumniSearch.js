import React from "react";
import "./AlumniSearch.css";

const AlumniSearch = ({ onChange }) => {
  return (
    <div className="alumni_search_container">
      <input
        type="text"
        name="alumniSearch"
        placeholder="키워드를 입력하세요."
        onChange={onChange}
      ></input>
    </div>
  );
};

export default AlumniSearch;
