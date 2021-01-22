import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ navClass, linkClassName, handleLogin, handleLogout }) => (
  <NavComponent
    navClass={navClass}
    linkClassName={linkClassName}
    handleLogin={handleLogin}
    handleLogout={handleLogout}
  />
);

export const NavComponent = ({ onClick, handleLogin, handleLogout }) => {
  const [userinfo, setUserInfo] = useState({ email: null, password: null });
  const handleChange = (e) => {
    setUserInfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
    console.log(userinfo);
  };

  const handleSubmit = (e) => {
    const { email, password } = userinfo;
    handleLogin({
      email: email,
      password: password,
    });
  };
  return (
    <>
      <nav>
        <div className="nav_class_wrapper">
          <div className="nav_class_boilerplate ">
            <div className="nav_class_bp_address">
              <span>주소</span>
              <p>
                04066 서울특별시<br></br>마포구 와우산로 94<br></br>홍익대학교
                R715
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
          <hr></hr>
          <div>
            {localStorage.getItem("access_token") ? (
              <button
                type="submit"
                className="mobile_login_input_button"
                onClick={() => handleLogout()}
              >
                로그아웃
              </button>
            ) : (
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  id="mobile_email"
                  placeholder="email"
                  type="text"
                  name="email"
                  value={userinfo.email}
                  onChange={(e) => handleChange(e)}
                ></input>
                <input
                  id="mobile_password"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={userinfo.password}
                  onChange={(e) => handleChange(e)}
                ></input>
                <button type="submit" className="mobile_login_input_button">
                  로그인
                </button>
              </form>
            )}
            <div className="applebox"></div>
            <Link to="/mobile/signup" onClick={onClick}>
              <span className="become_a_member">회원가입</span>
            </Link>
          </div>
          <hr></hr>
          <div className="nav_class_menubar">
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
              <Link to="/archive">
                <li onClick={onClick}>아카이브</li>{" "}
              </Link>
              <Link to="/calandar">
                <li onClick={onClick}>일정</li>{" "}
              </Link>
            </ul>
          </div>
          <hr></hr>
          <div className="nav_class_newsletter">
            <span onClick={onClick}>뉴스레터 구독하기</span>
          </div>
          <div className="nav_class_copyright">
            <hr className="bottomline"></hr>
            <p>
              <a
                href="https://www.facebook.com/HIVCD.GW"
                target="_blank"
                gclass="fa fa-facebook"
              ></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-instagram"></a>
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
