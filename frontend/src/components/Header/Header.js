import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { AboutUs, Board, Address, Archive } from "../../components";
import ContentContainer from "../../containers/ContentContainer/ContentContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-awesome-modal";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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

  render() {
    return (
      <Router>
        <header>
          <div className="header_container">
            <div className="header_container_title">
              <Link to="/">
                <h1 className="">
                  Hongik University Visual Communication Design
                </h1>
              </Link>
            </div>
            <div
              className="header_container_login"
              onClick={() => this._openModal()}
            >
              <Modal
                visible={this.state.visible}
                width="400"
                height="300"
                effect="fadeInDown"
                onClickAway={() => this._closeModal}
              ></Modal>
              <div className="navbar_login_item">LOGIN</div>
            </div>
            <div className="header_container_menubar">
              <Link to="/aboutus">
                <span className="navbar_menu_wrapper_item_title">About Us</span>
              </Link>
              <Link to="/board">
                <span className="navbar_menu_wrapper_item_title">Board</span>
              </Link>
              <Link to="/address">
                <span className="navbar_menu_wrapper_item_title">Address</span>
              </Link>
              <Link to="/archive">
                <span className="navbar_menu_wrapper_item_title">Archive</span>
              </Link>
            </div>
            <div className="header_container_search">
              <div className="navbar_search_item">SEARCH</div>
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
