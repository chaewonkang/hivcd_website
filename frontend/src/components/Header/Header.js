import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login, Search } from "../../components";
import axios from "axios";

function Header({ handleLogout, handleSearchKeyword }) {
  return (
    <header>
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_title">
            <Link to="/">
              <h1>
                홍익대학교 <br className="header_line"></br>
                미술대학 시각디자인과
              </h1>
            </Link>
          </div>
        </div>
        <div className="header_container_right">
          <div className="header_container_menubar">
            <span className="navbar_menu_wrapper_item_title">
              <Link to="/aboutus">정보</Link>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <Link to="/board">게시판</Link>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <Link to="/alumni">동문연락망</Link>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <Link to="/archive">아카이브</Link>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <Link to="/exhibition">전시</Link>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <Link to="/calandar">일정</Link>
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
