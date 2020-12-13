import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Login.css";
import { Link, withRouter } from "react-router-dom";
import axiosInstance from "../../utils/axiosApi";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._openModal = this._openModal.bind(this);
  }

  _openModal = function () {
    this.setState({
      visible: true,
    });
    document.body.style.overflow = "hidden";
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
    document.body.style.overflow = "unset";
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosInstance
        .post("/auth/login/", {
          email: this.state.email,
          password: this.state.password,
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + response.data.tokens;

      let tokens = response.data.tokens;
      const evalTokens = eval(`tokens = ${tokens}`);

      localStorage.setItem("access_token", evalTokens.access);
      localStorage.setItem("refresh_token", evalTokens.refresh);

      console.log(localStorage);
      const token = localStorage.getItem("access_token");
      console.log(token);
      this._closeModal();
      return response.tokens;
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <>
        <Modal
          visible={this.state.visible}
          width="450"
          height="380"
          effect="fadeInDown"
          onClickAway={this._closeModal}
        >
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="navbar_login_modal_container">
                <input
                  placeholder="email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                ></input>
                <div
                  type="submit"
                  value="Submit"
                  className="login_button"
                  onClick={this.handleSubmit}
                >
                  <span>LOGIN</span>
                </div>
                <Link to="/auth/registration" className="create_account_link">
                  <span className="create-account" onClick={this._closeModal}>
                    create account
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </Modal>
        <div className="navbar_login_item" onClick={this._openModal}>
          LOGIN
        </div>
        <div className="navbar_login_item">LOGOUT</div>
      </>
    );
  }
}

export default withRouter(Login);
