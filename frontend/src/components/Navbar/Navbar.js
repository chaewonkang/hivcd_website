import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import getCookie from "../../utils/getCookie";
import axios from "axios";
import "./Navbar.css";

async function handleLogout() {
  const response = await axios
    .get(
      "https://sidi.hongik.ac.kr/api/v1/auth/logout",
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
    .then(() => window.location.reload());
  return response;
}
const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick }) => {
  return (
    <>
      <nav>
        <div className="nav_class_wrapper">
          <div className="nav_class_menubar">
            <hr className="first_line"></hr>
            <ul>
              <Link to="/">
                <li onClick={onClick}>홈</li>{" "}
              </Link>
              <Link to="/aboutus">
                <li onClick={onClick}>소개</li>{" "}
              </Link>
              <Link to="/board">
                <li onClick={onClick}>공지</li>{" "}
              </Link>
              <Link to="/announce">
                <li onClick={onClick}>정보</li>{" "}
              </Link>
              {/* <Link to="/alumni">
                <li onClick={onClick}>동문 Alumni</li>{" "}
              </Link> */}
              <Link to="/archive">
                <li onClick={onClick}>기록</li>{" "}
              </Link>
              <Link to="/exhibition">
                <li onClick={onClick}>전시/행사</li>{" "}
              </Link>
              <Link to="/reservation">
                <li onClick={onClick}>예약</li>{" "}
              </Link>
              <Link to="/calendar">
                <li onClick={onClick}>일정</li>{" "}
              </Link>
            </ul>
          </div>
          <hr></hr>
          <div>
            {getCookie("SUSER_ID") !== null ? (
              <button
                type="submit"
                className="mobile_login_input_button"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            ) : (
              <a href="https://www.hongik.ac.kr/login.do?Refer=https://sidi.hongik.ac.kr/api/v1/auth/login">
                <button type="submit" className="mobile_login_input_button">
                  Login
                </button>
              </a>
            )}
          </div>
          <hr></hr>

          <div className="nav_class_newsletter">
            <span onClick={onClick}>
              <a
                href="https://eepurl.com/hk_U8n"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                뉴스레터 구독하기 Newsletter Subscribe
              </a>
            </span>
          </div>
          <hr></hr>

          <div className="nav_class_boilerplate ">
            <div className="nav_class_bp_address">
              <span>주소</span>
              <p>
                04066 서울특별시<br></br>마포구 와우산로 94<br></br>홍익대학교
                R712
              </p>
            </div>
            <div className="nav_class_bp_tel">
              <span>연락처</span>
              <p>
                (02)320-1214<br></br>(02)3142-5792
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="nav_class_openhours">
            <span>학과사무실</span>
            <div>
              월-금 9:00 am - 5:30 pm <br></br>(동절기) 9:00 am - 5:00 pm
            </div>
          </div>
        </div>
      </nav>
      <Route path="/" />
      <Route path="/aboutus" />
      <Route path="/board" />
      <Route path="/address" />
      <Route path="/archive" />
      <Route path="/calendar" />
    </>
  );
};

export default Navbar;
