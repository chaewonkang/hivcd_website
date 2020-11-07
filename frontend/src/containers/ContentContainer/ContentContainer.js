import React, { Component } from "react";
import axios from 'axios';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import {
  PostWrapper,
  Post,
  HomeArchive,
  Calandar,
  Equipment,
  Classroom,
  LogoImage,
  CalandarContainer,
} from "../../components";
import { ArchiveWrapper } from "../../components";
import * as service from "../../services/post";
import "./ContentContainer.css";

class ContentContainer extends Component {
  state = {

    postId: 1,
	loading: false,
	postList: [],
	items: 20,
	preItems: 0
  };

  componentWillMount() {

  }

  componentDidMount() {
	// this.fetchPostInfo(1);
	this._loadPost();

	// window.addEventListener('scroll', this._infiniteScroll);
  }

//   componentWillUnmount() {
// 	  window.removeEventListener("scroll", this.infiniteScroll);
//   }

	_loadPost = async () => {
		axios
		.get("https://jsonplaceholder.typicode.com/posts")
		.then(({data}) => {
			this.setState({
				...this.state,
				loading: true,
				postList: data
			});
		})
		.catch(e => {
			console.error(e);
			this.setState({
				...this.state,
				loading: false
			});
		});
	};

  render() {
	const { postList } = this.state;
   return (
      <Router>
        <div className="contentcontainer">
          <PostWrapper>
			  {postList && postList.map((post) => {
				  return (
					  <Post
					  title={post.title}
					  id={post.id}></Post>
				  )
			  })}
            <LogoImage></LogoImage>
            <Classroom></Classroom>
			<div className="calandar calandar_check">
				<div className="module_tag">
					<span>calandar</span>
				</div>
			</div>

            <LogoImage></LogoImage>

            <LogoImage></LogoImage>

            <Equipment></Equipment>

            <LogoImage></LogoImage>
          </PostWrapper>
          <ArchiveWrapper>
            <HomeArchive></HomeArchive>
            <HomeArchive></HomeArchive>
            <HomeArchive></HomeArchive>
            <HomeArchive></HomeArchive>
          </ArchiveWrapper>
        </div>
        <main>
        </main>
      </Router>
    );
  }
}

export default ContentContainer;
