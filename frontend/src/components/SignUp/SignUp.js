import React, { useState, useEffect } from "react";
import Modal from "react-awesome-modal";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";
import axiosInstance from "../../utils/axiosApi";

function Signup() {
  const [visible, setVisible] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    openModal();
    document.body.style.overflow = "unset";
  }, []);

  const openModal = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = "unset";
  };

  const handleChange = (e) => {
    setUserInfo({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const response = axiosInstance.post("/auth/registration/", {
        ...userInfo,
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        password2: userInfo.password2,
      });
      return response;
    } catch (e) {
      setError(e);
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/">
        <div className="signup_container"></div>
      </Link>
      <Modal visible={visible} width="450" height="660" effect="fadeInDown">
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="navbar_login_modal_container">
              <label>
                <input
                  placeholder="e-mail"
                  type="text"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                ></input>
                {/* {this.state.errors.email ? this.state.errors.email : null} */}
              </label>
              <label>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                ></input>
                {/* {this.state.errors.username
			  ? this.state.errors.username
			  : null} */}
              </label>
              <label>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                ></input>
                {/* {this.state.errors.password
			  ? this.state.errors.password
			  : null} */}
              </label>
              <label>
                <input
                  placeholder="confirm password"
                  type="password"
                  name="password2"
                  value={userInfo.password2}
                  onChange={handleChange}
                ></input>
                {/* {this.state.errors.password2
			  ? this.state.errors.password2
			  : null} */}
              </label>
              <button
                type="submit"
                value="submit"
                className="signup_button"
                onClick={() => handleSubmit()}
              >
                <span>SIGN UP</span>
              </button>
              <div className="signup_button">
                <Link
                  to="/"
                  className="back_to_home"
                  onClick={() => (document.body.style.overflow = "unset")}
                >
                  <span id="backtohome">BACK TO HOME</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default withRouter(Signup);
