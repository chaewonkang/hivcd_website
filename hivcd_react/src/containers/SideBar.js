import React from 'react';
import logo from './img/logo.png'

const SideBar = () => {
	return (

	<div className="col-lg-2 col-md-2 col-sm-12">
	<div className="home-page-signpost-wrapper" data-sticky>
	<div className="sidebar-logo">
		<img
		className='sidebar_logo'
		src={ logo }
		alt='logo'
		/>
	</div>
	<div className="schedule-wrapper font-ar--small">
	<div class='sign-post sign-post-oval--wrapper '>
			<div class='sign-post-oval'>
				<a href='/en/visit' class='blank-link'>NOW CLOSED</a>
			</div>
	</div>
	<hr></hr>
		<div className="schedule-wrapper__hours font-ar--small">
				<b>학과사무실 운영시간<br></br></b>
				MON-FRI<br></br>
				10:00-17:00
				<br></br>
				<br></br>
				<b>헥사 운영시간</b><br></br>
				MON-FRI<br></br>
				10:00-17:00
				</div>
		<hr></hr>
		<div class="home__support-signpost diamond--outer-wrapper">
		<div class="sign-post sign-post-diamond--wrapper">
			<div class="sign-post-diamond">
				<a href='/en/donate' class='blank-link'></a>
			</div>
			</div>
		</div>
	</div>
	</div>
	</div>

)};

export default SideBar;
