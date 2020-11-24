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
      id: "",
      password: "",
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
            <div className="header_container_title">
              <Link to="/">
                <h1 className="">
                  Hongik University Visual Communication Design
                </h1>
              </Link>
            </div>
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
                        type="text"
                        name="id"
                        onChange={() => this._changeId()}
                      ></input>
                      <input
                        type="text"
                        name="password"
                        onChange={() => this._changePW()}
                      ></input>
                      <input
                        value="LOGIN"
                        type="button"
                        onClick={() => this._closeModal()}
                      ></input>
                      <span className="create-account">create account</span>
                    </div>
                  </form>
                </div>
              </Modal>
              <div
                className="navbar_login_item"
                onClick={() => this._openModal()}
              >
                LOGIN
              </div>
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
