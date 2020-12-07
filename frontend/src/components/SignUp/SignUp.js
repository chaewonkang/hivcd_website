import React, { Component } from "react";
import Modal from "react-awesome-modal";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      search: "",
      id: "",
      password: "",
      provider: "",
    };
    document.body.style.overflow = "hidden";
  }

  _openModal = function () {
    this.setState({
      visible: true,
    });
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
    document.body.style.overflow = "unset";
  };

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  _changeSearch = function () {
    const searchValue = document.getElementsByName("search")[0].value;
    console.log(searchValue);

    this.setState({
      ...this.tate,
      search: searchValue,
    });
  };

  _changeId = function () {
    const idValue = document.getElementsByName("id")[0].value;
    console.log(idValue);

    this.setState({
      ...this.state,
      id: idValue,
    });
  };

  _changePW = function () {
    const pwValue = document.getElementsByName("password")[0].value;
    console.log(pwValue);

    this.setState({
      ...this.state,
      password: pwValue,
    });
  };

  _postSignup = async () => {
    axios
      .post("http://localhost:8000/api/v1/auth/registration", {
        email: this.state.id,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Link to="/">
          <div className="signup_container"></div>
        </Link>
        <Modal
          visible={this.state.visible}
          width="450"
          height="640"
          effect="fadeInDown"
        >
          <div>
            <form>
              <div className="navbar_login_modal_container">
                <input
                  placeholder="e-mail"
                  type="text"
                  name="id"
                  onChange={() => this._changeId()}
                ></input>
                <input
                  placeholder="username"
                  type="text"
                  name="password"
                  onChange={() => this._changePW()}
                ></input>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  onChange={() => this._changePW()}
                ></input>
                <input
                  placeholder="confirm password"
                  type="password"
                  name="password"
                  onChange={() => this._changePW()}
                ></input>
                <div className="signup_button" onClick={() => this._Signup()}>
                  <span>SIGN UP</span>
                </div>
                <div className="signup_button">
                  <Link
                    to="/"
                    className="back_to_home"
                    onClick={() => (document.body.style.overflow = "unset")}
                  >
                    <span>BACK TO HOME</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default withRouter(SignUp);
