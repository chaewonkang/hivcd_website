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
  SignUp,
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
import axiosInstance from "./utils/axiosApi";
import "./utils/Animation.css";

function App() {
  const [logged, setLogged] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    setSearchKeyword(searchKeyword);
  }, [searchKeyword]);

  const handleLogin = async (data) => {
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

      return response.tokens;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = async (e) => {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.username) {
      setLogged(true);
    }
  });

  return (
    <main>
      <Switch>
        <div className="AppBody">
          <Route path="/auth/registration" component={SignUp}></Route>
          <Route path="/mobile/signup" component={MobileSignup}></Route>
          <Header
            handleSearchKeyword={handleSearchKeyword}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
            isLogged={logged}
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
