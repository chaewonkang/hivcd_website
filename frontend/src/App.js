import React, { Component } from "react";
import { Header, Footer, MobileSignup } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  AboutUs,
  Board,
  Alumni,
  Archive,
  BoardDetailPage,
  SignUp,
} from "./components";
import ContentContainer from "./containers/ContentContainer/ContentContainer";

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
      <Router>
        <Switch>
          <div className="AppBody">
            <Route path="/mobile/signup" component={MobileSignup}></Route>
            <Route path="/auth/registration" component={SignUp}></Route>
            <Header logged={logged} onLogOut={onLogout}></Header>
            <Route exact path="/" component={ContentContainer} />
            <Route exact path="/board" component={Board} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/alumni" component={Alumni} />
            <Route path="/archive" component={Archive} />
            <Route path="/board/:postId" component={BoardDetailPage}></Route>
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
