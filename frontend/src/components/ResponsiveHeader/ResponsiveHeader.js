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
    <div>
      <button
        className="hamburger-btn"
        onClick={() => setTranslate(!translate)}
      >
        {" "}
        {/* toggle translate */}
        {/* change the btn text based on whether translate is true or false */}
        {translate ? <span>&#9776;</span> : <span>&times;</span>}
      </button>
      {/*hide and show the sidebar list based on whether translate is true or false*/}
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
