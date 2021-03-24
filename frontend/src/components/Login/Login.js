import React, { useState } from "react";
import "./Login.css";
import getCookie from "../../utils/getCookie";
import axios from "axios";

async function handleLogout(token) {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/auth/logout",
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

function Login() {
  const [token] = useState(getCookie("csrftoken"));
  const [loginText, setLoginText] = useState({
    login: "로그인",
    logout: "로그아웃",
  });
  return (
    <>
      {getCookie("SUSER_ID") !== null ? (
        <a href="http://sidi.hongik.ac.kr">
          <span
            onMouseOver={() => setLoginText({ ...loginText, logout: "Logout" })}
            onMouseLeave={() =>
              setLoginText({ ...loginText, logout: "로그아웃" })
            }
          >
            {loginText.logout}
          </span>
        </a>
      ) : (
        <a href="http://www.hongik.ac.kr/login.do?Refer=https://sidi.hongik.ac.kr/api/v1/auth/login">
          <div className="navbar_login_item">
            <span
              onMouseOver={() => setLoginText({ ...loginText, login: "Login" })}
              onMouseLeave={() =>
                setLoginText({ ...loginText, login: "로그인" })
              }
            >
              {loginText.login}
            </span>
          </div>
        </a>
      )}
    </>
  );
}

export default Login;
