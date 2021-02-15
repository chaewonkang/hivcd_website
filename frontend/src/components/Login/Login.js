import React, { useState } from "react";
import "./Login.css";

function Login({ handleLogin, handleLogout }) {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const openModal = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {localStorage.getItem("access_token") ? (
        <div className="navbar_login_item" onClick={() => handleLogout()}>
          로그아웃
        </div>
      ) : (
        <div className="navbar_login_item" onClick={() => openModal()}>
          로그인
        </div>
      )}
    </>
  );
}

export default Login;
