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

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/registration/", {
        ...this.state,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      });
      return response;
    } catch (error) {
      console.log(error.stack);
      this.setState({
        ...this.state,
        errors: error.response.data,
      });
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
                <label>
                  <input
                    placeholder="e-mail"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                  {/* {this.state.errors.email ? this.state.errors.email : null} */}
                </label>
                <label>
                  <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
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
                    value={this.state.password}
                    onChange={this.handleChange}
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
                    value={this.state.password2}
                    onChange={this.handleChange}
                  ></input>
                  {/* {this.state.errors.password2
                    ? this.state.errors.password2
                    : null} */}
                </label>
                <button
                  type="submit"
                  value="submit"
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
