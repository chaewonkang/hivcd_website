import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login, Search } from "../../components";

function Header({ handleLogout, handleSearchKeyword }) {
  const [menuText, setMenuText] = useState({
    about: "소개",
    news: "소식",
    info: "안내",
    alumni: "동문",
    show: "전시",
    calandar: "일정",
  });

  return (
    <header>
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_title">
            <Link to="/">
              <h1 className="title">홍익대학교 미술대학 시각디자인과</h1>
            </Link>
          </div>
        </div>
        <div className="header_container_right">
          <div className="header_container_menubar">
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/aboutus">
                <span
                  id="about"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, about: "About" })
                  }
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, about: "소개" })
                  }
                >
                  {menuText.about}
                </span>
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/board">
                <span
                  id="news"
                  onMouseOver={() => setMenuText({ ...menuText, news: "News" })}
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, news: "소식" })
                  }
                >
                  {menuText.news}
                </span>
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/announce">
                <span
                  id="info"
                  onMouseOver={() => setMenuText({ ...menuText, info: "Info" })}
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, info: "안내" })
                  }
                >
                  {menuText.info}
                </span>
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/alumni">
                <span
                  id="alumni"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, alumni: "Alumni" })
                  }
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, alumni: "동문" })
                  }
                >
                  {menuText.alumni}
                </span>{" "}
              </NavLink>
            </span>
            {/* <span className="navbar_menu_wrapper_item_title">
              <Link to="/archive">아카이브</Link>
            </span> */}
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                className="link"
                activeClassName="active"
                to="/exhibition"
              >
                <span
                  id="show"
                  onMouseOver={() => setMenuText({ ...menuText, show: "Show" })}
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, show: "전시" })
                  }
                >
                  {menuText.show}
                </span>{" "}
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/calandar">
                <span
                  id="calandar"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, calandar: "Calandar" })
                  }
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, calandar: "일정" })
                  }
                >
                  {menuText.calandar}
                </span>{" "}
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
            <div className="header_container_search" id="subscription">
              <div id="subscription_button" class="subscription_button">
                <div>
                  <a
                    href="http://eepurl.com/hk_U8n"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#000" }}
                    className="subscribe"
                  >
                    뉴스레터
                  </a>
                </div>
              </div>
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
