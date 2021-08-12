import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Header,
  Footer,
  CalandarContainer,
  AboutUs,
  Board,
  Archive,
  Exhibition,
  Announce,
  ArchiveDetail,
} from './components';
import './App.css';
import './components/Header/Header.css';
import {
  SearchResultContainer,
  EachPostContainer,
  ReservationContainer,
  ContentContainer,
  EachExhibitionContainer,
  EachAnnounceContainer,
} from './containers';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
    console.log(keyword);
  };

  return (
    <main>
      <Switch>
        <>
          <div className='body'>
            <Header handleSearchKeyword={handleSearchKeyword}></Header>
            <Route exact path='/' component={ContentContainer} />
            <Route exact path='/board' component={Board} />
            <Route path='/board/:postId' component={EachPostContainer}></Route>
            <Route path='/aboutus' component={AboutUs} />
            {/* <Route path="/alumni" component={Alumni} /> */}
            <Route exact path='/exhibition' component={Exhibition} />
            <Route
              path='/exhibition/:postId'
              component={EachExhibitionContainer}
            ></Route>
            <Route exact path='/info' component={Announce} />
            <Route
              exact
              path='/info/:postId'
              component={EachAnnounceContainer}
            />
            <Route path='/calendar' component={CalandarContainer} />
            <Route path='/reservation' component={ReservationContainer} />
            <Route exact path='/archive' component={Archive} />
            <Route exact path='/archive/:postId' component={ArchiveDetail} />
            <Route path='/board/:postId' component={EachPostContainer} />
            <Route
              path='/search'
              render={() => (
                <SearchResultContainer
                  searchKeyword={searchKeyword}
                ></SearchResultContainer>
              )}
            />
            <Footer />
          </div>
        </>
      </Switch>
    </main>
  );
}

export default App;
