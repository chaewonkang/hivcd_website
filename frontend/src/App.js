import React, { useState } from "react";
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
import {
  SearchResultContainer,
  EachPostContainer,
  ReservationContainer,
  ContentContainer,
  EachExhibitionContainer,
} from "./containers";
import axios from "axios";
import { useEffect } from "react";
import getCookie from "./utils/getCookie";

function App() {
  async function getPostPk(t) {
    const response = await axios
      .get(
        "http://sidi.hongik.ac.kr/api/v1/postings",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            Accept: "application/json",
            "X-CSRFToken": t,
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        response.data.map((post) => setPostPk(postPk.concat(post.pk)));
      });
    return response.data;
  }

  const [searchKeyword, setSearchKeyword] = useState("");
  const [postPk, setPostPk] = useState([]);
  const [token] = useState(getCookie("csrftoken"));

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    setPostPk(getPostPk(token));
    console.log(postPk);
  }, []);

  return (
    <main>
      <Switch>
        <div className="body">
          <Header handleSearchKeyword={handleSearchKeyword}></Header>
          <Route exact path="/" component={ContentContainer} />
          <Route exact path="/board" component={Board} />
          <Route path="/board/:postId" component={EachPostContainer}></Route>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/alumni" component={Alumni} />
          <Route exact path="/exhibition" component={Exhibition} />
          <Route
            path="/exhibition/:postId"
            component={EachExhibitionContainer}
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
