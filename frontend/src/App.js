import React, { Component } from "react";
import {
  Header,
  Footer,
  MobileSignup,
  CalandarContainer,
  ResponsiveHeader,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/Header/Header.css";
import {
  AboutUs,
  Board,
  Alumni,
  Archive,
  BoardDetailPage,
  SignUp,
} from "./components";
import ContentContainer from "./containers/ContentContainer/ContentContainer";
import { SearchResultContainer } from "./containers";
import axios from "axios";

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
  }

  handleSearchKeyword = (keyword) => {
    this.setState({
      ...this.state,
      searchKeyword: keyword,
    });
  };

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
    console.log(`App component searchKeyword: ${this.state.searchKeyword}`);

    return (
      <Router basename="">
        <Switch>
          <div className="AppBody">
            <Route path="/mobile/signup" component={MobileSignup}></Route>
            <Route path="/auth/registration" component={SignUp}></Route>
            <ResponsiveHeader
              navClass="nav-small"
              linkClassName="nav-small-link"
            ></ResponsiveHeader>
            <Header handleSearchKeyword={this.handleSearchKeyword}></Header>
            <Route exact path="/home" component={ContentContainer} />
            <Route exact path="/board" component={Board} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/alumni" component={Alumni} />
            <Route path="/archive" component={Archive} />
            <Route path="/board/:postId" component={BoardDetailPage}></Route>
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
      </Router>
    );
  }
}

export default App;
