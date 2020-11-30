import React, { Component } from "react";
import { Header, Footer } from "./components";
import { Auth } from "./pages";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  // Login Func
  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  onLogout = () => {
    this.setState({
      logged: false,
    });

    const provider = window.sessionStorage.getItem("provider");
    // Google AccessToken Remove
    if (provider === "google") {
      const auth2 = window.GamepadHapticActuator.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("Google Logout");
      });
    }
    window.sessionStorage.clear();
  };

  componentDidMount() {
    const id = window.sessionStorage.getItem("id");
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }
  render() {
    const { logged, onLogout } = this.state;
    return (
      <div className="AppBody">
        <Header logged={logged} onLogOut={onLogout}></Header>
        <Switch>
          <Route path="/auth/:kind" exact={true} component={Auth}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
