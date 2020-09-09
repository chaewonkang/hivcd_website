import React from 'react';

const SiteContainer = (props) => {
	return (
			<div class="site-container">
			<div class="container-fluid">
				<div class="row" data-sticky-parent>
			<div class="home-page-top-module-area col-sm-8 col-lg-10">
			<div style={{ background: '#fff', padding: 24, minHeight: 280}}>
				{props.children}
			</div>
			</div>
			</div>
			</div>
			</div>
)};

export default SiteContainer;
