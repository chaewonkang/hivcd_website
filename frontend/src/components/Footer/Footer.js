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
            <span className="footer-item-title">주소</span>
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
            <span className="footer-item-title">연락처</span>
            <p>
              전화 02-320-1214<br></br>
              팩스 02-3142-5792
            </p>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">학과사무실</span>
            <p>
              월 - 금 9:00 ~ 17:30 <br></br>
              동절기 9:00 ~ 17:00
            </p>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">뉴스레터</span>
            <div id="subscription_button" class="subscription_button">
              구독하기
            </div>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">바로가기</span>
            <p>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-instagram"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
