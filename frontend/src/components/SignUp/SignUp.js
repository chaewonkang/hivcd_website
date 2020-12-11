import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";
import axiosInstance from "../../utils/axiosApi";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      username: "",
      password: "",
      password2: "",
      email: "",
      provider: "",
    };
    document.body.style.overflow = "hidden";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosInstance
        .post("/auth/registration/", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
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
    } catch (error) {
      console.log(error.stack);
    }
  }

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
            <form onSubmit={this.handleSubmit}>
              <div className="navbar_login_modal_container">
                <input
                  placeholder="e-mail"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                ></input>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                ></input>
                <input
                  placeholder="confirm password"
                  type="password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.handleChange}
                ></input>
                <button
                  type="submit"
                  value="Submit"
                  className="signup_button"
                  onClick={() => this.handleSubmit}
                >
                  <span>SIGN UP</span>
                </button>
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
