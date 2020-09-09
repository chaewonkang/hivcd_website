import React from 'react';
import './Header.css'

const HeaderMenuBar = () => {
	return (
		<div>
		<div class="controller--home_page action--show current-user--not-admin ">
        <div class="footer-push-wrapper">
		<header class="header--primary">
		<div class="container-fluid">
		  <div class="row">
			<div class="header__menu-col col-sm-9">
				<ul class="menu menu--main_menu ">
					<li class="menu__item  menu__item--level-0 menu__item--exhibitions menu__item--with-children">
					<a class="menu__item__link" href="#">공지사항</a>
						<ul class="menu__sub-menu">
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_current">
								<a class="menu__item__link" href="/en/exhibitions#current">Current</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_upcoming">
								<a class="menu__item__link" href="/en/exhibitions#upcoming">Upcoming</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_past">
								<a class="menu__item__link" href="/en/exhibitions#past">Past</a>
							</li>
						</ul>
					</li>
					<li class="menu__item  menu__item--level-0 menu__item--exhibitions menu__item--with-children">
					<a class="menu__item__link" href="#">공지사항</a>
						<ul class="menu__sub-menu">
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_current">
								<a class="menu__item__link" href="/en/exhibitions#current">Current</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_upcoming">
								<a class="menu__item__link" href="/en/exhibitions#upcoming">Upcoming</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_past">
								<a class="menu__item__link" href="/en/exhibitions#past">Past</a>
							</li>
						</ul>
					</li>
					<li class="menu__item  menu__item--level-0 menu__item--exhibitions menu__item--with-children">
					<a class="menu__item__link" href="/en/exhibitions">공지사항</a>
						<ul class="menu__sub-menu">
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_current">
								<a class="menu__item__link" href="/en/exhibitions#current">Current</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_upcoming">
								<a class="menu__item__link" href="/en/exhibitions#upcoming">Upcoming</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_past">
								<a class="menu__item__link" href="/en/exhibitions#past">Past</a>
							</li>
						</ul>
					</li>
					<li class="menu__item  menu__item--level-0 menu__item--exhibitions menu__item--with-children">
					<a class="menu__item__link" href="/en/exhibitions">공지사항</a>
						<ul class="menu__sub-menu">
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_current">
								<a class="menu__item__link" href="/en/exhibitions#current">Current</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_upcoming">
								<a class="menu__item__link" href="/en/exhibitions#upcoming">Upcoming</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_past">
								<a class="menu__item__link" href="/en/exhibitions#past">Past</a>
							</li>
						</ul>
					</li>
					<li class="menu__item  menu__item--level-0 menu__item--exhibitions menu__item--with-children">
					<a class="menu__item__link" href="/en/exhibitions">공지사항</a>
						<ul class="menu__sub-menu">
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_current">
								<a class="menu__item__link" href="/en/exhibitions#current">Current</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_upcoming">
								<a class="menu__item__link" href="/en/exhibitions#upcoming">Upcoming</a>
							</li>
							<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_past">
								<a class="menu__item__link" href="/en/exhibitions#past">Past</a>
							</li>
						</ul>
					</li>
	  			</ul>
			</div>
			<div class="header__yellow-pages-col col-sm-3">
			  <a class="blank-link" href="/en/yellow-pages">2020 Grad Show</a>
			</div>
		  </div>
		</div>
		</header>
	</div>
	</div>

	<header class="header--primary--mobile">
	<div class="container-fluid">
	<div class="row">
		<div class="header--primary--mobile__title-col col-sm-12">
		<div class="hamburger">
			<div class="hamburger__inner">
			<div class="hamburger__line hamburger__line-1"></div>
			<div class="hamburger__line hamburger__line-2"></div>
			<div class="hamburger__line hamburger__line-3"></div>
			</div>
		</div>
		<h1 class="header--primary--mobile__title">
			<a class="blank-link" href="/en/">Hongik University Visual Communication Design <br></br>홍익대학교 시각디자인과</a>
	</h1>      </div>
		<div class="header--primary--mobile__menu-col col-sm-12">
				<ul class="menu menu--main_menu ">
			<li class="menu__item  menu__item--level-0 menu__item--exhibitions menu__item--with-children">
	<a class="menu__item__link" href="/en/exhibitions">Exhibitions</a>
		<ul class="menu__sub-menu">
			<li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_current">
	<a class="menu__item__link" href="/en/exhibitions#current">Current</a>
	</li>  <li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_upcoming">
	<a class="menu__item__link" href="/en/exhibitions#upcoming">Upcoming</a>
	</li>  <li class="menu__item menu__item--siblings-2 menu__item--with-siblings menu__item--level-1 menu__item--nav_exhibitions_past">
	<a class="menu__item__link" href="/en/exhibitions#past">Past</a>
	</li>
	</ul></li>  <li class="menu__item  menu__item--level-0 menu__item--calendar">
	<a class="menu__item__link" href="/en/calendar">Calendar</a>
	</li>  <li class="menu__item  menu__item--level-0 menu__item--nav_learning menu__item--with-children">
	<a class="menu__item__link" href="/en/learning">Learning</a>
		<ul class="menu__sub-menu">
			<li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--exhibition_programs">
	<a class="menu__item__link" href="/en/learning/12-exhibition-programs"><span class="translation_missing" title="translation missing: en.Exhibition_Programs">Exhibition Programs</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--public-programs">
	<a class="menu__item__link" href="/en/learning/18-public-programs"><span class="translation_missing" title="translation missing: en.Public Programs">Public Programs</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--featured-media">
	<a class="menu__item__link" href="/en/learning/23-featured-media"><span class="translation_missing" title="translation missing: en.Featured Media">Featured Media</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--special-projects">
	<a class="menu__item__link" href="/en/learning/special-projects"><span class="translation_missing" title="translation missing: en.Special Projects">Special Projects</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--digital-projects">
	<a class="menu__item__link" href="/en/learning/20-digital-projects"><span class="translation_missing" title="translation missing: en.Digital Projects">Digital Projects</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--schools-community">
	<a class="menu__item__link" href="/en/learning/39-schools-community"><span class="translation_missing" title="translation missing: en.Schools / Community">Schools / Community</span></a>
	</li>
	</ul></li>  <li class="menu__item  menu__item--level-0 menu__item--visit">
	<a class="menu__item__link" href="/en/visit">Visit</a>
	</li>  <li class="menu__item  menu__item--level-0 menu__item--about menu__item--with-children">
	<a class="menu__item__link" href="/en/about">About</a>
		<ul class="menu__sub-menu">
			<li class="menu__item menu__item--siblings-4 menu__item--with-siblings menu__item--level-1 menu__item--nav_staff">
	<a class="menu__item__link" href="/en/staff">Staff</a>
	</li>  <li class="menu__item menu__item--siblings-4 menu__item--with-siblings menu__item--level-1 menu__item--governance">
	<a class="menu__item__link" href="/en/governance"><span class="translation_missing" title="translation missing: en.governance">Governance</span></a>
	</li>  <li class="menu__item menu__item--siblings-4 menu__item--with-siblings menu__item--level-1 menu__item--nav_press">
	<a class="menu__item__link" href="/en/press">Press</a>
	</li>  <li class="menu__item menu__item--siblings-4 menu__item--with-siblings menu__item--level-1 menu__item--partnerships">
	<a class="menu__item__link" href="/en/partnerships"><span class="translation_missing" title="translation missing: en.partnerships">Partnerships</span></a>
	</li>  <li class="menu__item menu__item--siblings-4 menu__item--with-siblings menu__item--level-1 menu__item--opportunities">
	<a class="menu__item__link" href="/en/opportunities"><span class="translation_missing" title="translation missing: en.opportunities">Opportunities</span></a>
	</li>
	</ul></li>  <li class="menu__item  menu__item--level-0 menu__item--shop">
	<a class="menu__item__link" href="/en/shop"><span class="translation_missing" title="translation missing: en.shop">Shop</span></a>
	</li>  <li class="menu__item  menu__item--level-0 menu__item--get_involved menu__item--with-children">
	<a class="menu__item__link" href="/en/get-involved">Get Involved</a>
		<ul class="menu__sub-menu">
			<li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--incognito-2020">
	<a class="menu__item__link" href="/en/incognito"><span class="translation_missing" title="translation missing: en.Incognito 2020">Incognito 2020</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--donate">
	<a class="menu__item__link" href="/en/donate">Donate</a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--join">
	<a class="menu__item__link" href="/en/Memberships"><span class="translation_missing" title="translation missing: en.Join">Join</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--1717">
	<a class="menu__item__link" href="/en/get-involved/1717"><span class="translation_missing" title="translation missing: en.1717">1717</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--corporate">
	<a class="menu__item__link" href="/en/corporate"><span class="translation_missing" title="translation missing: en.corporate">Corporate</span></a>
	</li>  <li class="menu__item menu__item--siblings-5 menu__item--with-siblings menu__item--level-1 menu__item--institutional_support">
	<a class="menu__item__link" href="/en/get-involved/institutional-support"><span class="translation_missing" title="translation missing: en.institutional_support">Institutional Support</span></a>
	</li>
	</ul></li>
	</ul>
		<div class="header--primary--mobile__yellow-pages-col psuedo-menu-item">
			<a class="blank-link" href="/en/yellow-pages">Yellow Pages</a>
		</div>
		<div class="header--primary--mobile__search-col psuedo-menu-item">
			<a class="blank-link" href="/en/search">Search</a>
		</div>
		</div>
	</div>
	</div>
	</header>
	<div class="header--primary--mobile-push"></div>
	<div class="header--primary--mobile-cover"></div>
	</div>
)};

export default HeaderMenuBar;
