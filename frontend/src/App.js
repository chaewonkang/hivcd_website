import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Header,
  Footer,
  MobileSignup,
  CalandarContainer,
  AboutUs,
  Board,
  Alumni,
  Archive,
  Exhibition,
} from "./components";
import "./App.css";
import "./components/Header/Header.css";
import ContentContainer from "./containers/ContentContainer/ContentContainer";
import {
  SearchResultContainer,
  EachPostContainer,
  ReservationContainer,
} from "./containers";
import { useCookies } from "react-cookie";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "SUSER_ID",
    "SUSER_NAME",
  ]);

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    setSearchKeyword(searchKeyword);
  }, [searchKeyword]);

  const handleLogout = async (e) => {
    try {
      removeCookie("SUSER_ID");
      removeCookie("SUSER_NAME");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <Switch>
        <div className="AppBody">
          <Route path="/mobile/signup" component={MobileSignup}></Route>
          <Header
            handleSearchKeyword={handleSearchKeyword}
            handleLogout={handleLogout}
          ></Header>
          <Route exact path="/" component={ContentContainer} />
          <Route exact path="/board" component={Board} />
          <Route path="/board/:postId" component={EachPostContainer}></Route>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/alumni" component={Alumni} />
          <Route path="/exhibition" component={Exhibition} />
          <Route path="/calandar" component={CalandarContainer} />
          <Route path="/reservation" component={ReservationContainer} />
          <Route path="/archive" component={Archive} />
          <Route
            path="/search"
            render={() => (
              <SearchResultContainer
                searchKeyword={searchKeyword}
              ></SearchResultContainer>
            )}
          />
          <Footer />
        </div>
      </Switch>
    </main>
  );
}

export default App;
