import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Header,
  Footer,
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

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    setSearchKeyword(searchKeyword);
  }, [searchKeyword]);

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
          <Route exact path="/exhibition" component={Exhibition} />
          <Route
            path="/exhibition/:postId"
            component={EachPostContainer}
          ></Route>
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
