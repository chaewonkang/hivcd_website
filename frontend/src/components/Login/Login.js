import React, { useState } from "react";
import "./Login.css";
import getCookie from "../../utils/getCookie";
import axios from "axios";

async function handleLogout() {
  const response = await axios
    .get(
      "https://sidi.hongik.ac.kr/api/v1/auth/logout/",
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

function Login() {
  const [loginText] = useState({
    login: "로그인",
    logout: "로그아웃",
  });
  return (
    <>
      {getCookie("SUSER_ID") !== null ? (
        <div className="navbar_login_item">
          <span onClick={() => handleLogout()}>{loginText.logout}</span>
        </div>
      ) : (
        <a href="http://www.hongik.ac.kr/login.do?Refer=https://sidi.hongik.ac.kr/api/v1/auth/login/">
          <div className="navbar_login_item">
            <span>{loginText.login}</span>
          </div>
        </a>
      )}
    </>
  );
}

export default Login;
