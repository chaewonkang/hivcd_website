import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "react-awesome-modal";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      search: "",
    };
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

  render() {
    return (
      <div className="header_container_login">
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
                  type="text"
                  name="password"
                  onChange={() => this._changePW()}
                ></input>
                <div className="button">
                  <span>LOGIN</span>
                </div>
                <span className="create-account">create account</span>
              </div>
            </form>
          </div>
        </Modal>
        <div className="navbar_login_item" onClick={() => this._openModal()}>
          LOGIN
        </div>
      </div>
    );
  }
}

export default Login;
