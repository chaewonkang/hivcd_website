import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login, Search } from "../../components";

function Header({ handleLogin, handleLogout }) {
  return (
    <header>
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_title">
            <Link to="/">
              <h1>
                Hongik University <br className="header_line"></br>Visual
                Communication Design
              </h1>
            </Link>
          </div>
          <div className="header_container_login">
            <Login
              handleLogout={handleLogout}
              handleLogin={handleLogin}
            ></Login>
          </div>
          <div className="header_container_search">
            <Search></Search>
          </div>
        </div>
        <div className="header_container_right">
          <div className="header_container_menubar">
            <Link to="/aboutus">
              <span className="navbar_menu_wrapper_item_title">About</span>
            </Link>
            <Link to="/board">
              <span className="navbar_menu_wrapper_item_title">Board</span>
            </Link>
            <Link to="/alumni">
              <span className="navbar_menu_wrapper_item_title">Alumni</span>
            </Link>
            <Link to="/archive">
              <span className="navbar_menu_wrapper_item_title">Archive</span>
            </Link>
            <Link to="/calandar">
              <span className="navbar_menu_wrapper_item_title">Calandar</span>
            </Link>
          </div>
        </div>
        <div className="header_container_responsive">
          <ResponsiveHeader
            navClass="nav-small"
            linkClassName="nav-small-link"
            handleLogout={handleLogout}
            handleLogin={handleLogin}
          ></ResponsiveHeader>
        </div>
      </div>
    </header>
  );
}

export default Header;
