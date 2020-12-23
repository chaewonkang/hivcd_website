import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Header,
  Footer,
  MobileSignup,
  CalandarContainer,
  ResponsiveHeader,
  AboutUs,
  Board,
  Alumni,
  Archive,
  SignUp,
} from "./components";
import "./App.css";
import "./components/Header/Header.css";
import ContentContainer from "./containers/ContentContainer/ContentContainer";
import {
  SearchResultContainer,
  EachPostContainer,
  NotFoundContainer,
} from "./containers";
import axiosInstance from "./utils/axiosApi";
import "./Animation.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
      searchKeyword: "",
      isLogged: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSearchKeyword = (keyword) => {
    this.setState({
      ...this.state,
      searchKeyword: keyword,
    });
  };

  async handleLogin(data) {
    const { email, password } = data;
    try {
      const response = await axiosInstance
        .post("/auth/login/", {
          email: email,
          password: password,
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + response.data.tokens;

      let tokens = response.data.tokens;
      const evalTokens = eval(`tokens = ${tokens}`);

      localStorage.setItem("access_token", evalTokens.access);
      localStorage.setItem("refresh_token", evalTokens.refresh);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("username", response.data.username);

      //   console.log(response);
      //   console.log(localStorage);
      return response.tokens;
    } catch (error) {
      throw error;
    }
  }

  async handleLogout(e) {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  makeCalandarComp = () => {
    window.eventCalId = 7279;
    const integrationScript = document.createElement("script");
    integrationScript.async = 1;
    integrationScript.setAttribute(
      "src",
      "https://api.eventcalendarapp.com/integration-script.js"
    );
    document.head.appendChild(integrationScript);
    if (window.eventCalendarAppUtilities) {
      window.eventCalendarAppUtilities.init(
        "025d70f1-3768-4efa-a8db-f98a9ebd3780"
      );
    }
  };

  componentDidUpdate() {
    if (localStorage.username) {
      this.setState({ isLogged: true });
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <div className="AppBody">
            <Route path="/mobile/signup" component={MobileSignup}></Route>
            <Route path="/auth/registration" component={SignUp}></Route>
            <ResponsiveHeader
              navClass="nav-small"
              linkClassName="nav-small-link"
            ></ResponsiveHeader>
            <Header
              handleSearchKeyword={this.handleSearchKeyword}
              handleLogout={this.handleLogout}
              handleLogin={this.handleLogin}
              isLogged={this.state.isLogged}
            ></Header>
            <Route exact path="/" component={ContentContainer} />
            <Route exact path="/board" component={Board} />
            <Route path="board/:postId" component={EachPostContainer}></Route>
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/alumni" component={Alumni} />
            <Route path="/archive" component={Archive} />
            <Route path="/calandar" component={CalandarContainer} />
            {/* <Route
              path="/search"
              render={() => (
                <SearchResultContainer
                  searchKeyword={this.state.searchKeyword}
                ></SearchResultContainer>
			  )}
            /> */}
            <Route component={NotFoundContainer} />
            <Footer />
          </div>
        </Switch>
      </main>
    );
  }
}

export default App;
