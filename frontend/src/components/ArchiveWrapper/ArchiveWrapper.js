import React from 'react';
import './ArchiveWrapper.css'

const ArchiveWrapper = ({children}) => {
	return(
		<div className="container-fluid">
			<div className="row">
				{children}
			</div>
		</div>
	);
};

export default ArchiveWrapper;
