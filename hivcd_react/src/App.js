import React from 'react';
import { Header, Footer } from './components'
import './App.css';
import { ContentContainer } from './containers';

function App() {
  return (
	  <div>
		  <Header/>
		  <ContentContainer/>
		  <Footer/>
	  </div>
  );
}

export default App;
