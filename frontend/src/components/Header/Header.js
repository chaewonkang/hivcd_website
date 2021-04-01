import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login, Search } from "../../components";

function Header({ handleLogout, handleSearchKeyword }) {
  const [menuText, setMenuText] = useState({
    about: "소개",
    news: "공지",
    info: "정보",
    alumni: "동문",
    show: "전시/행사",
    calandar: "일정",
    newsletter: "뉴스레터",
    title: "홍익대학교 미술대학 시각디자인과",
    archive: "기록",
    reservation: "예약",
  });

  return (
    <header>
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_title">
            <Link to="/">
              <h1 className="title">
                <span
                  id="title"
                  onMouseOver={() =>
                    setMenuText({
                      ...menuText,
                      title: "Hongik University Visual Communication Design",
                    })
                  }
                  onMouseLeave={() =>
                    setMenuText({
                      ...menuText,
                      title: "홍익대학교 미술대학 시각디자인과",
                    })
                  }
                >
                  {menuText.title}
                </span>
              </h1>
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
                    setMenuText({ ...menuText, news: "공지" })
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
                    setMenuText({ ...menuText, info: "정보" })
                  }
                >
                  {menuText.info}
                </span>
              </NavLink>
            </span>
            {/* <span className="navbar_menu_wrapper_item_title">
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
            </span> */}
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/archive">
                <span
                  id="archive"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, archive: "Archive" })
                  }
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, archive: "기록" })
                  }
                >
                  {menuText.archive}
                </span>{" "}
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                className="link"
                activeClassName="active"
                to="/reservation"
              >
                <span
                  id="reservation"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, reservation: "Reservation" })
                  }
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, reservation: "예약" })
                  }
                >
                  {menuText.reservation}
                </span>{" "}
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink
                className="link"
                activeClassName="active"
                to="/exhibition"
              >
                <span
                  id="show"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, show: "Show/Event" })
                  }
                  onMouseLeave={() =>
                    setMenuText({ ...menuText, show: "전시/행사" })
                  }
                >
                  {menuText.show}
                </span>{" "}
              </NavLink>
            </span>
            <span className="navbar_menu_wrapper_item_title">
              <NavLink className="link" activeClassName="active" to="/calendar">
                <span
                  id="calandar"
                  onMouseOver={() =>
                    setMenuText({ ...menuText, calandar: "Calendar" })
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
            <div className="header_container_login">
              <a
                href="http://eepurl.com/hk_U8n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <>
                  <div className="navbar_login_item">
                    <span
                      onMouseOver={() =>
                        setMenuText({ ...menuText, newsletter: "Newsletter" })
                      }
                      onMouseLeave={() =>
                        setMenuText({ ...menuText, newsletter: "뉴스레터" })
                      }
                    >
                      {menuText.newsletter}
                    </span>
                  </div>
                </>
              </a>
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
