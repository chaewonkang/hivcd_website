import React from "react";
import "./Login.css";
import getCookie from "../../utils/getCookie";

function Login({ handleLogout }) {
  return (
    <>
      {getCookie("SUSER_ID") !== null ? (
        <a href="http://devsidi.hongik.ac.kr">
          <div className="navbar_login_item" onClick={() => handleLogout()}>
            로그아웃
          </div>
        </a>
      ) : (
        <a href="http://www.hongik.ac.kr/login.do?Refer=http://devsidi.hongik.ac.kr/api/v1/auth/login">
          <div className="navbar_login_item">로그인</div>
        </a>
      )}
    </>
  );
}

export default Login;
