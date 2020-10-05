import React from 'react';
import './PostWrapper.css'

const PostWrapper = ({children}) => {
	return (
		<div className="container-fluid">
			<div className="row">
				{children}
			</div>
		</div>
	)
}

export default PostWrapper;
