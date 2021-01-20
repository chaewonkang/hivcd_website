import React, { useState } from "react";
import Modal from "react-awesome-modal";
import "./Login.css";
import { Link } from "react-router-dom";

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

  const handleChange = (e) => {
    setUserInfo({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { email, password } = userInfo;
    handleLogin({
      email: email,
      password: password,
    });
    closeModal();
  };

  return (
    <>
      <Modal
        visible={visible}
        width="450"
        height="365"
        effect="fadeInDown"
        onClickAway={() => closeModal()}
      >
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="navbar_login_modal_container">
              <input
                placeholder="email"
                type="text"
                name="email"
                value={userInfo.email}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                placeholder="password"
                type="password"
                name="password"
                value={userInfo.password}
                onChange={(e) => handleChange(e)}
              ></input>
              <div
                value="submit"
                className="login_button"
                onClick={(e) => handleSubmit(e)}
              >
                <span>로그인</span>
              </div>
              <Link to="/auth/registration" className="create_account_link">
                <span className="create-account" onClick={() => closeModal()}>
                  create account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </Modal>
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
