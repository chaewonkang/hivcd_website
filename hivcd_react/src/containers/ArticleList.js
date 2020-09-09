import React from 'react';
import Articles from '../components/Articles'
import axios from 'axios';

const listData = [];

for (let i = 0; i < 23; i++) {
	listData.push({
		href: 'https://ant.design',
		title: `ant design part ${i}`,
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	});
}

class ArticleList extends React.Component {

	state = {
		articles: []
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/postings/')
			.then(res => {
				this.setState({
					articles: res.data
				});
				console.log(res.data);
			})
	}

	render() {
		return (
			<Articles data={listData} />
		)
	}
}

export default ArticleList;
