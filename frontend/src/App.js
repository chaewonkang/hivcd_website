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
import { SearchResultContainer, EachPostContainer } from "./containers";
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
      isLogged: true,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSearchKeyword = (keyword) => {
    this.setState({
      ...this.state,
      searchKeyword: keyword,
    });
  };

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
            ></Header>
            <Route exact path="/" component={ContentContainer} />
            <Route exact path="/board" component={Board} />
            <Route path="/board/:postId" component={EachPostContainer} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/alumni" component={Alumni} />
            <Route path="/archive" component={Archive} />
            <Route path="/calandar" component={CalandarContainer} />
            <Route
              path="/search"
              render={() => (
                <SearchResultContainer
                  searchKeyword={this.state.searchKeyword}
                ></SearchResultContainer>
              )}
            />
            <Footer />
          </div>
        </Switch>
      </main>
    );
  }
}

export default App;
