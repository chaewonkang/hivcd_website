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

  //   const handleLogout = async (e) => {
  //     try {
  //       console.log("handleLogout enter");
  //       removeCookie("SUSER_ID");
  //       removeCookie("SUSER_NAME");
  //       document.cookie =
  //         "SUSER_ID=; domain=.hongik.ac.kr; expires= Wed, 20 Mar 1970 04:54:09 GMT";
  //       document.cookie =
  //         "SUSER_NAME=; domain=.hongik.ac.kr; expires= Wed, 20 Mar 1970 04:54:09 GMT";
  //       console.log("handleLogout out");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <main>
      <Switch>
        <div className="AppBody">
          <Header handleSearchKeyword={handleSearchKeyword}></Header>
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
