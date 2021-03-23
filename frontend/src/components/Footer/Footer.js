import React from "react";
import logo from "../../img/hivcd_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_container">
          <div className="footer-item">
            <img src={logo} width="40" height="40" alt="HIVCD Logo"></img>
          </div>
          <div className="footer-item">
            <p>
              <span className="english_address">04066 </span>
              <span className="korean_address">서울특별시 마포구 와우산로</span>
              <span className="english_address">94 </span>
              <br></br>
              <span className="korean_address">홍익대학교 홍문관 </span>
              <span className="english_address">
                R712 미술대학 시각디자인과 학과사무실
              </span>
            </p>
          </div>
          <div className="footer-item">
            <p>
              Dept. of Visual Communication Design, R712, Hongik University
              <br></br>
              94, Wausan-ro, Mapo-gu, Seoul 04066, South Korea
            </p>
          </div>
          <div className="footer-item">
            <p>
              <a
                href="https://www.hongik.ac.kr/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                홍익대학교<br></br>
                Hongik University
              </a>
            </p>
          </div>
          <div className="footer-item">
            <p>
              <a
                href="https://www.instagram.com/hivcd2021/"
                target="_blank"
                rel="noopener noreferrer"
              >
                홍익대학교 미술대학<br></br>
                Hongik University College of Fine Arts
              </a>
            </p>
          </div>
          <div className="footer-item" id="subscription">
            <span className="footer-item-title">뉴스레터</span>
            <div id="subscription_button" class="subscription_button">
              <a
                href="http://eepurl.com/hk_U8n"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
                className="subscribe"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
