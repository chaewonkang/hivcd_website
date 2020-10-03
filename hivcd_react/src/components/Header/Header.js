import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { AboutUs, Board, Address, Archive } from '../../components';
import ContentContainer from '../../containers/ContentContainer/ContentContainer'
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

const Header = () => {
	return (
		<Router>
				<header>
					<div className="container-fluid">
						<div className="row">
							<div className="navbar_title col-lg-4">
								<Link to="/"><h1>Hongik University Visual Communication Design</h1></Link>
							</div>
							<div className="navbar_login col-lg-4">
								<div className="navbar_login_item">Log in</div>
							</div>
							<div className="navbar_menu col-lg-4">
									<div className="container-fluid">
										<div className="row">
											<div className="navbar_menu_wrapper col-lg-10">
												<div className="row">
													<div classNamme="navbar_menu_wrapper_item col-lg-3">
													<Link to="/aboutus">
														<span className="navbar_menu_wrapper_item_title">About Us</span>
													</Link>
													</div>
													<div classNamme="navbar_menu_wrapper_item col-lg-3">
														<Link to="/board">
															<span className="navbar_menu_wrapper_item_title">Board</span>
														</Link>
													</div>
													<div classNamme="navbar_menu_wrapper_item col-lg-3">
														<Link to="/address">
															<span className="navbar_menu_wrapper_item_title">Address</span>
														</Link>
													</div>
													<div classNamme="navbar_menu_wrapper_item col-lg-3">
														<Link to="/archive">
															<span className="navbar_menu_wrapper_item_title">Archive</span>
														</Link>
													</div>
												</div>
											</div>
											<div className="navbar_search col-lg-2">
												<div className="navbar_search_item">Search</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				</header>
				<main>
					<Route exact path="/" component={ContentContainer} />
					<Route path="/aboutus" component={AboutUs} />
					<Route path="/board" component={Board} />
					<Route path="/address" component={Address} />
					<Route path="/archive" component={Archive} />
				</main>
		</Router>
	)
};

export default Header;