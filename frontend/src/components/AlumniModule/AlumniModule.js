import React from "react";
import "./AlumniModule.css";

const AlumniModule = ({ key, year, name, tel, url }) => {
  return (
    <div className="alumni_module_container">
      13
      <br></br>
      {name} <br></br>
      {tel} <br></br>
      {url}
    </div>
  );
};

export default AlumniModule;
