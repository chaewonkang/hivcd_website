import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView'

class App extends Component {
	render() {

		return (
			<div>
				<CustomLayout>
					<ArticleList></ArticleList>
				</CustomLayout>
			</div>
		)
	}
}

export default App;
