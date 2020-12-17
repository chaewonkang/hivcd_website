import React, { Component } from "react";
import { connect } from "react-redux";
import { Login } from "../../components";
import { withRouter } from "react-router-dom";
import * as authActions from "../../store/modules/auth";

export class AuthContainer extends Component {
  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { initializeInput, initializeError } = this.props;
    initializeError();
    initializeInput();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.kind !== this.props.kind) {
      this.initialize();
    }
  }

  handleChangeInput = ({ name, value }) => {
    const { changeInput } = this.props;
    changeInput({ name, value });
  };

  handleLogin = () => {
    const { login } = this.props;
    login();
  };

  handleRegister = () => {
    const { register } = this.props;
    register();
  };

  render() {
    const { kind, username, password, error } = this.props;
    const { handleChangeInput, handleLogin, handleRegister } = this;
    return (
      <Login
        kind={kind}
        username={username}
        password={password}
        onChangeInput={handleChangeInput}
        onLogin={handleLogin}
        onRegister={handleRegister}
        error={error}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.form.username,
  password: state.auth.form.password,
  userInfo: state.auth.userInfo,
  logged: state.auth.logged,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    initializeInput: () => {
      dispatch(authActions.initializeInput());
    },
    changeInput: ({ name, value }) => {
      dispatch(authActions.changeInput({ name, value }));
    },
    initializeError: () => {
      dispatch(authActions.initializeError());
    },
    register: () => {
      dispatch(authActions.register());
    },
    login: () => {
      dispatch(authActions.login());
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
);
