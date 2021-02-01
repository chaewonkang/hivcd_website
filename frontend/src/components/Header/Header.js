import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login, Search } from "../../components";

function Header({ handleLogin, handleLogout, handleSearchKeyword }) {
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
            <Link to="/aboutus">
              <span className="navbar_menu_wrapper_item_title">정보</span>
            </Link>
            <Link to="/board">
              <span className="navbar_menu_wrapper_item_title">게시판</span>
            </Link>
            <Link to="/alumni">
              <span className="navbar_menu_wrapper_item_title">동문연락망</span>
            </Link>
            <Link to="/archive">
              <span className="navbar_menu_wrapper_item_title">아카이브</span>
            </Link>
            <Link to="/exhibition">
              <span className="navbar_menu_wrapper_item_title">전시</span>
            </Link>
            <Link to="/calandar">
              <span className="navbar_menu_wrapper_item_title">일정</span>
            </Link>
          </div>
          <div className="header_container_system">
            <div className="header_container_login">
              <Login
                handleLogout={handleLogout}
                handleLogin={handleLogin}
              ></Login>
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
            handleLogin={handleLogin}
          ></ResponsiveHeader>
        </div>
      </div>
    </header>
  );
}

export default Header;
