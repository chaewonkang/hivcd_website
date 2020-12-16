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
    this._closeModal = this._closeModal.bind(this);
    this._openModal = this._openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.handleLogin({
      email: email,
      password: password,
    });
    if (localStorage.access_token) {
      this.setState({
        ...this.state,
        isLogged: true,
      });
    }
    this._closeModal();
  };

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
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="navbar_login_modal_container">
                <input
                  placeholder="email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                ></input>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                ></input>
                <div
                  type="submit"
                  value="Submit"
                  className="login_button"
                  onClick={(e) => this.handleSubmit(e)}
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
        {this.state.isLogged ? (
          <div
            className="navbar_login_item"
            onClick={() => this.props.handleLogout()}
          >
            LOGOUT
          </div>
        ) : (
          <div className="navbar_login_item" onClick={this._openModal}>
            LOGIN
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Login);
