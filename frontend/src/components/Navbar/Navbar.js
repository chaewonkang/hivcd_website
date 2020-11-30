import React from "react";
import { Link, Route } from "react-router-dom";
import { Login } from "../../components";

import "./Navbar.css";

const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick }) => (
  <>
    <nav>
      <div className="nav_class_wrapper">
        <div className="nav_class_boilerplate">
          <div className="nav_class_bp_address">
            <span>Address</span>
            <p>
              04066 서울특별시<br></br>마포구 와우산로 94<br></br>홍익대학교
              R715
            </p>
          </div>
          <div className="nav_class_bp_tel">
            <span>Tel/Fax</span>
            <p>
              (02)320-1214<br></br>(02)3142-5792
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="nav_class_openhours">
          <span>Open Hours</span>
          <div>
            Mon-Fri 9:00 am - 5:30 pm <br></br>(Winter) 9:00 am - 5:00 pm
          </div>
        </div>
        <hr></hr>
        <div>
          <Login></Login>
        </div>
        <hr></hr>
        <div className="nav_class_menubar">
          <ul>
            <Link to="/">
              <li onClick={onClick}>Home</li>{" "}
            </Link>
            <Link to="/aboutus">
              <li onClick={onClick}>About</li>{" "}
            </Link>
            <Link to="/board">
              <li onClick={onClick}>Board</li>{" "}
            </Link>
            <Link to="/alumni">
              <li onClick={onClick}>Alumni</li>{" "}
            </Link>
            <Link to="/archive">
              <li onClick={onClick}>Archive</li>{" "}
            </Link>
          </ul>
        </div>
        <hr></hr>
        <div className="nav_class_newsletter">
          <span>Subscribe Newsletter</span>
        </div>
        <div className="nav_class_copyright">
          <p>
            Website Designed by Yinyang, <br></br>Developed by Chaewon Kang,
            Seokyu Kim<br></br>Ⓒ 2020 HIVCD
          </p>
        </div>
      </div>
    </nav>
    <Route path="/" />
    <Route path="/aboutus" />
    <Route path="/board" />
    <Route path="/address" />
    <Route path="/archive" />
  </>
);
export default Navbar;
