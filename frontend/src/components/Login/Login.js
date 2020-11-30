import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Login.css";
import axios from "axios";
// import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";

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

  // Google Login
  responseGoogle = (res) => {
    this.setState({
      id: res.googldId,
      name: res.profileObj.name,
      provider: "google",
    });
    this.doSignUp();
  };

  // Kakao Login
  responseKakao = (res) => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao",
    });
    this.doSignUp();
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  doSignUp = () => {
    const { id, name, provider } = this.state;
    window.sessionStorage.setItem("id", id);
    window.sessionStorage.setItem("name", name);
    window.sessionStorage.setItem("provider", provider);
    this.props.onLogin();
    this.props.history.push("/");
  };

  _openModal = function () {
    this.setState({
      visible: true,
    });
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
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
    console.log("ID:" + this.state.id + ", PW:" + this.state.password);

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
                  onClick={() => this._postLogin()}
                ></input>
                <input
                  placeholder="password"
                  type="text"
                  name="password"
                  onChange={() => this._changePW()}
                ></input>
                <div className="button">
                  <span>LOGIN</span>
                </div>
                {/* <GoogleLogin
                  clientId={process.env.REACT_APP_Google}
                  buttonText="Google Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseFail}
                ></GoogleLogin> */}
                <span className="create-account">create account</span>
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
