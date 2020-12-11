import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Login.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      search: "",
      id: "",
      password: "",
      provider: "",
    };
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

  _postLogin = async () => {
    axios
      .post("http://localhost:8000/api/v1/auth/login/", {
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
        <Modal
          visible={this.state.visible}
          width="450"
          height="380"
          effect="fadeInDown"
          onClickAway={() => this._closeModal()}
        >
          <div>
            <form>
              <div className="navbar_login_modal_container">
                <input
                  placeholder="ID"
                  type="text"
                  name="id"
                  onChange={() => this._changeId()}
                ></input>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  onChange={() => this._changePW()}
                ></input>
                <div className="login_button" onClick={() => this._postLogin()}>
                  <span>LOGIN</span>
                </div>
                {/* <GoogleLogin
                  clientId={process.env.REACT_APP_Google}
                  buttonText="Google Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseFail}
                ></GoogleLogin> */}
                <Link to="/auth/registration" className="create_account_link">
                  <span
                    className="create-account"
                    onClick={() => this._closeModal()}
                  >
                    create account
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </Modal>
        <div className="navbar_login_item" onClick={() => this._openModal()}>
          LOGIN
        </div>
      </>
    );
  }
}

export default withRouter(Login);
