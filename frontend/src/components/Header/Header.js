import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login, Search } from "../../components";

function Header({ handleLogout, handleSearchKeyword }) {
  return (
    <header>
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_title">
            <NavLink to="/">
              <h1 className="title">홍익대학교 미술대학 시각디자인과</h1>
            </NavLink>
          </div>
        </div>
        <div className="header_container_right">
          <div className="header_container_menubar">
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                id="about"
                className="link"
                activeClassName="active"
                to="/aboutus"
              >
                소개
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                id="news"
                className="link"
                activeClassName="active"
                to="/board"
              >
                소식
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                id="announce"
                className="link"
                activeClassName="active"
                to="/announce"
              >
                안내
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                id="alumni"
                className="link"
                activeClassName="active"
                to="/alumni"
              >
                동문
              </NavLink>
            </span>
            {/* <span className="navbar_menu_wrapper_item_title">
              <Link to="/archive">아카이브</Link>
            </span> */}
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                className="link"
                id="show"
                activeClassName="active"
                to="/exhibition"
              >
                전시
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                id="calandar"
                className="link"
                activeClassName="active"
                to="/calandar"
              >
                일정
              </NavLink>
            </span>
          </div>
          <div className="header_container_system">
            <div className="header_container_login">
              <Login handleLogout={handleLogout}></Login>
            </div>
            <div className="header_container_search">
              <Search handleSearchKeyword={handleSearchKeyword}></Search>
            </div>
          </div>
        </div>
        <div className="header_container_responsive">
          <ResponsiveHeader
            navClass="nav-small"
            linkClassName="nav-small-link"
            handleLogout={handleLogout}
          ></ResponsiveHeader>
        </div>
      </div>
    </header>
  );
}

export default Header;
