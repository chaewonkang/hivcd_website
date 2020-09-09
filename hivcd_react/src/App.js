import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import ArticleList from './containers/ArticleList'
import HeaderMenuBar from './components/Header/HeaderMenuBar'
import HeaderTitle from './components/Header/HeaderTitle'
import SideBar from './containers/SideBar'
import SiteContainer from './containers/SiteContainer'
import Footer from './components/Footer/Footer'

class App extends Component {
	render() {

		return (
			<div>
				<HeaderTitle></HeaderTitle>
				<HeaderMenuBar></HeaderMenuBar>
				<SideBar></SideBar>
				<SiteContainer>
					<ArticleList></ArticleList>
					<ArticleList></ArticleList>
					<ArticleList></ArticleList>
					<ArticleList></ArticleList>
				</SiteContainer>
				<Footer></Footer>
			</div>
		)
	}
}

export default App;
