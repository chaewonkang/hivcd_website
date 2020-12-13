import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Search } from "../../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import "./Header.css";
import { Login } from "../../components";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: "",
      password: "",
      translate: true,
      searchKeyword: "",
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
    const { logged, onLogout } = this.props;

    return (
      <header>
        <div className="header_container">
          <div className="header_container_left">
            <div className="header_container_title">
              <Link to="/">
                <h1>
                  Hongik University <br className="header_line"></br>Visual
                  Communication Design
                </h1>
              </Link>
            </div>
            <div className="header_container_login">
              <Login
                logged={logged}
                onLogOut={onLogout}
                handleLogout={this.props.handleLogout}
              ></Login>
            </div>
          </div>
          <div className="header_container_right">
            <div className="header_container_menubar">
              <Link to="/aboutus">
                <span className="navbar_menu_wrapper_item_title">About</span>
              </Link>
              <Link to="/board">
                <span className="navbar_menu_wrapper_item_title">Board</span>
              </Link>
              <Link to="/alumni">
                <span className="navbar_menu_wrapper_item_title">Alumni</span>
              </Link>
              <Link to="/archive">
                <span className="navbar_menu_wrapper_item_title">Archive</span>
              </Link>
              <Link to="/calandar">
                <span className="navbar_menu_wrapper_item_title">Calandar</span>
              </Link>
            </div>
            <Search handleSearchKeyword={this.props.handleSearchKeyword} />
          </div>
          <div className="header_container_responsive">
            <ResponsiveHeader
              navClass="nav-small"
              linkClassName="nav-small-link"
            ></ResponsiveHeader>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
