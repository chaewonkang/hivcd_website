import React from "react";
import "./AlumniSearch.css";

const AlumniSearch = ({ onChange }) => {
  return (
    <div className="alumni_search_container">
      <input
        type="text"
        name="alumniSearch"
        placeholder="Enter item to be searched..."
        onChange={onChange}
      ></input>
    </div>
  );
};

export default AlumniSearch;
