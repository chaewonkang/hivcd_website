import React, { Component } from "react";
import { Header, Footer } from "./components";
import { Auth, NotFound } from "./pages";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ContentContainer from "./containers/ContentContainer/ContentContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/auth/:kind" exact={true} component={Auth}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
