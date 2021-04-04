import React from "react";
import "./Archive.css";
import logogif from "../../img/logogif.gif";

function Archive() {
  return (
    <div className="container_loading">
      <img className="loading_status" src={logogif} alt="logogif"></img>
    </div>
  );
}

export default Archive;
