import React, { Component } from "react";
import { Header, Footer } from "./components";
import { Auth, Board } from "./pages";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="AppBody">
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
