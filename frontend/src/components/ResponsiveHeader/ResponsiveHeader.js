import React, { useState } from "react";
import { NavComponent } from "../Navbar/Navbar";
import "./ResponsiveHeader.css";

const ResponsiveHeader = () => {
  let [translate, setTranslate] = useState(true);
  if (translate === false) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";

  function handleLoginData(e) {
    e.preventDefault();
  }

  return (
    <div className="header_container_responsive">
      <button
        className="hamburger-btn"
        onClick={() => setTranslate(!translate)}
      >
        {translate ? <span>&#9776;</span> : <span>&times;</span>}
      </button>
      <div
        id="sidebar-list"
        className={`${translate ? "addTransiton" : "removeTransition"}`}
      >
        <NavComponent
          navClass="nav-small"
          linkClassName="nav-small-link"
          onClick={() => setTranslate(true)} //set translate to true to hide the sidebar list
          handleLoginData={handleLoginData}
        />
      </div>
    </div>
  );
};

export default ResponsiveHeader;
