import React, { Component } from 'react';
import { PostWrapper, Post, Archive } from '../../components';
import { ArchiveWrapper } from '../../components';
import './ContentContainer.css'

class ContentContainer extends Component {
	render() {
		return (
			<div className="contentcontainer container-fluid">
				<div className="row">
					<div className="postwrapper col-lg-8">
						<PostWrapper>
							<Post></Post>
							<Post></Post>
							<Post></Post>
							<Post></Post>
							<Post></Post>
							<Post></Post>

						</PostWrapper>
					</div>
					<div className="archivewrapper col-lg-4">
						<ArchiveWrapper>
							<Archive></Archive>
							<Archive></Archive>
						</ArchiveWrapper>
					</div>
				</div>
			</div>
		)
	}
}

export default ContentContainer;
