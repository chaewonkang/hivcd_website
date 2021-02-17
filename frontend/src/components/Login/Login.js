import React, { useState } from "react";
import "./Login.css";
import getCookie from "../../utils/getCookie";

function Login({ handleLogin, handleLogout }) {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <>
      {getCookie("SUSER_ID") ? (
        <div className="navbar_login_item" onClick={() => handleLogout()}>
          로그아웃
        </div>
      ) : (
        <div className="navbar_login_item">로그인</div>
      )}
    </>
  );
}

export default Login;
