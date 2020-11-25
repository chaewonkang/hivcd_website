import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { AboutUs, Board, Address, Archive, Search } from "../../components";
import ContentContainer from "../../containers/ContentContainer/ContentContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResponsiveHeader } from "../../components";
import { Navbar } from "../../components";
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
    console.log("ID:" + this.state.id + ", PW:" + this.state.password);
    return (
      <Router>
        <header>
          <div className="header_container">
            <div className="header_container_left">
              <div className="header_container_title">
                <Link to="/">
                  <h1 className="">
                    Hongik University Visual Communication Design
                  </h1>
                </Link>
              </div>
              <Login></Login>
            </div>
            <div className="header_container_right">
              <div className="header_container_menubar">
                <Link to="/aboutus">
                  <span className="navbar_menu_wrapper_item_title">About</span>
                </Link>
                <Link to="/board">
                  <span className="navbar_menu_wrapper_item_title">Board</span>
                </Link>
                <Link to="/address">
                  <span className="navbar_menu_wrapper_item_title">Alumni</span>
                </Link>
                <Link to="/archive">
                  <span className="navbar_menu_wrapper_item_title">
                    Archive
                  </span>
                </Link>
              </div>
              <Search />
            </div>
            <div className="header_container_responsive">
              <ResponsiveHeader
                navClass="nav-small"
                linkClassName="nav-small-link"
              ></ResponsiveHeader>
            </div>
          </div>
        </header>
        <main>
          <Route exact path="/" component={ContentContainer} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/board" component={Board} />
          <Route path="/address" component={Address} />
          <Route path="/archive" component={Archive} />
        </main>
      </Router>
    );
  }
}

export default Header;
