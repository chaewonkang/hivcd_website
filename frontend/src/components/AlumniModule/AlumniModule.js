import React from "react";
import "./AlumniModule.css";

const AlumniModule = ({ year, name, tel, url }) => {
  return (
    <div className="alumni_module_container">
      {year}
      <br></br>
      {name}
      <br></br>
      {tel}
      <br></br>
      {url}
    </div>
  );
};

export default AlumniModule;
