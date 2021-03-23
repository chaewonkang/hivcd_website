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
  return (
    <>
      {getCookie("SUSER_ID") !== null ? (
        <a href="http://sidi.hongik.ac.kr">
          <div
            className="navbar_login_item"
            onClick={(t = token) => handleLogout((t = token))}
          >
            Logout
          </div>
        </a>
      ) : (
        <a href="http://www.hongik.ac.kr/login.do?Refer=https://sidi.hongik.ac.kr/api/v1/auth/login">
          <div className="navbar_login_item">Login</div>
        </a>
      )}
    </>
  );
}

export default Login;
