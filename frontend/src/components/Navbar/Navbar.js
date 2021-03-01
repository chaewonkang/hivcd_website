import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import getCookie from "../../utils/getCookie";
import axios from "axios";
import "./Navbar.css";

async function handleLogout(token) {
  const response = await axios.get(
    "http://sidi.hongik.ac.kr/api/v1/auth/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
  return response;
}
const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick }) => {
  const [token] = useState(getCookie("csrftoken"));

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
                <li onClick={onClick}>정보</li>{" "}
              </Link>
              <Link to="/board">
                <li onClick={onClick}>게시판</li>{" "}
              </Link>
              <Link to="/alumni">
                <li onClick={onClick}>동문연락망</li>{" "}
              </Link>
              {/* <Link to="/archive">
                <li onClick={onClick}>아카이브</li>{" "}
              </Link> */}
              <Link to="/exhibition">
                <li onClick={onClick}>전시</li>{" "}
              </Link>
              <Link to="/calandar">
                <li onClick={onClick}>일정</li>{" "}
              </Link>
            </ul>
          </div>
          <hr></hr>
          <div>
            {getCookie("SUSER_ID") !== null ? (
              <a href="http://sidi.hongik.ac.kr">
                <button
                  type="submit"
                  className="mobile_login_input_button"
                  onClick={(t = token) => handleLogout((t = token))}
                >
                  로그아웃
                </button>
              </a>
            ) : (
              <a href="http://www.hongik.ac.kr/login.do?Refer=http://sidi.hongik.ac.kr/api/v1/auth/login">
                <button type="submit" className="mobile_login_input_button">
                  로그인
                </button>
              </a>
            )}
          </div>
          <hr></hr>

          <div className="nav_class_newsletter">
            <span onClick={onClick}>
              <a
                href="http://eepurl.com/hk_U8n"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                뉴스레터 구독하기
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

          <div className="nav_class_copyright">
            <hr className="bottomline"></hr>
            <p>
              <a
                href="https://www.hongik.ac.kr/index.do"
                className="fa fa-home"
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}
              </a>
              <a
                href="https://www.facebook.com/HIVCD.GW"
                className="fa fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}
              </a>
              <a
                href="https://www.instagram.com/hivcd2021/"
                className="fa fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}
              </a>
            </p>
          </div>
        </div>
      </nav>
      <Route path="/" />
      <Route path="/aboutus" />
      <Route path="/board" />
      <Route path="/address" />
      <Route path="/archive" />
      <Route path="/calandar" />
    </>
  );
};

export default Navbar;
