import React from "react";
import logo from "../../img/hivcd_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_container">
          <div className="footer-item">
            <img src={logo} width="70" height="70" alt="HIVCD Logo"></img>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Address</span>
            <p>
              <span className="english_address">04066 </span>
              <span className="korean_address">
                서울특별시 마포구 <br></br>와우산로{" "}
              </span>
              <span className="english_address">94 </span>
              <span className="korean_address">홍익대학교 </span>
              <span className="english_address">R715</span>
            </p>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Contact</span>
            <p>
              Tel 02-320-1214<br></br>
              Fax 02-3142-5792
            </p>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Open Hours</span>
            <p>
              Mon - Fri 9 am - 5.30 pm <br></br>
              Winter 9 am - 5 pm
            </p>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Newsletter</span>
            <div class="subscription_button">SUBSCRIBE</div>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Website by</span>
            <p>Yinyang, Seogyu Kim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
