import React from 'react';
import './Post.css'

const Post = () => (
	<div className="post_column col-lg-3 col-md-6">
		<div className="post">
			<div className="post_tag">
				<span>board</span>
			</div>
			<div className="post_content">
				<h2 className="post_content_header"> 미술대학 시각디자인과, 한국디자인학회 대학생학술대회 우수논문상, 장려상 수상</h2>
				<span className="post_content_date">2020.07.15</span>
			</div>
		</div>
	</div>
);

export default Post;
