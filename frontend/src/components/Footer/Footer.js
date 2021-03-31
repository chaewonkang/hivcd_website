import React from "react";
import logo from "../../img/hivcd_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_container">
          <div className="footer-item">
            <img src={logo} width="33" height="33" alt="HIVCD Logo"></img>
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
<<<<<<< HEAD
            <span className="footer-item-title">뉴스레터</span>
            <div id="subscription_button" class="subscription_button">
              <a
                href="http://eepurl.com/hk_U8n"
                rel="noopener noreferrer"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                구독하기
              </a>
            </div>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">바로가기</span>
            <p>
              <a
<<<<<<< HEAD
                href="https://www.hongik.ac.kr"
                rel="noopener noreferrer"
                target="_blank"
=======
                href="http://hongik.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> cc913082961392f5c62b67856b515b940f9fb1e4
                class="fa fa-facebook"
              >
                {""}
              </a>
              <a
<<<<<<< HEAD
                href="https://www.hongik.ac.kr"
                rel="noopener noreferrer"
                target="_blank"
=======
                href="http://hongik.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> cc913082961392f5c62b67856b515b940f9fb1e4
                class="fa fa-twitter"
              >
                {""}
              </a>
              <a
<<<<<<< HEAD
                href="https://www.hongik.ac.kr"
                rel="noopener noreferrer"
                target="_blank"
=======
                href="http://hongik.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> cc913082961392f5c62b67856b515b940f9fb1e4
                class="fa fa-instagram"
              >
                {""}
              </a>
=======
            <p>
              Dept. of Visual Communication Design, R712, Hongik University
              <br></br>
              94, Wausan-ro, Mapo-gu, Seoul 04066, South Korea
>>>>>>> 71d51e69ffc0b429b3f76c10aaa8647edb23a3a0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
