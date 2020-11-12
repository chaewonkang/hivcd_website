import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus_wrapper">
		<div className="aboutus_maintext">
			<p>
			홍익대학교 시각디자인과는 디자인의 세계화, 국제화 시대에 부응하는 디자이너를 길러내기 위해 국제 디자인 워크숍 개최, 해외디자인 세미나 참여, 세계 여러 유수 디자인대학과의 교류를 진행하고 있다. <br></br>
홍익대학교 시각디자인 전공은 시각정보매체 발달에 맞추어 관련 분야와 적극적인 교류를 통해 시각디자인의 영역을 넓히는 한편, 새로운 이론과 교육방법을 창출하여 현 교육체제에 반영함으로써 21세기 국내외 디자인계에서 창조적이면서 능동적인 리더의 역할을 담당하는 전문디자이너를 양성하는데 그 교육목표를 두고 있다.
			</p>
		</div>
      <div className="aboutus_container">
        <div id="history" className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>HISTORY</span>
          </div>
          <div className="aboutus_content">
            <h2>
              {" "}
              미술대학 시각디자인과, 한국디자인학회 대학생학술대회 우수논문상,
              장려상 수상 <br></br>
              {/* color: {this.state.color} */}
            </h2>
            <span className="post_content_date">2020.07.15</span>
          </div>
        </div>
        <div id="curriculum" className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>CURRICULUM</span>
          </div>
          <div className="aboutus_content">
            <h2>
              {" "}
              미술대학 시각디자인과, 한국디자인학회 대학생학술대회 우수논문상,
              장려상 수상 <br></br>
              {/* color: {this.state.color} */}
            </h2>
            <span className="post_content_date">2020.07.15</span>
          </div>
        </div>
        <div id="map" className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>MAP</span>
          </div>
          <div className="aboutus_content">
            <h2>
              {" "}
              미술대학 시각디자인과, 한국디자인학회 대학생학술대회 우수논문상,
              장려상 수상 <br></br>
              {/* color: {this.state.color} */}
            </h2>
            <span className="post_content_date">2020.07.15</span>
          </div>
        </div>
        <div id="contact" className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>CONTACT</span>
          </div>
          <div className="aboutus_content">
            <h2>
              {" "}
              미술대학 시각디자인과, 한국디자인학회 대학생학술대회 우수논문상,
              장려상 수상 <br></br>
              {/* color: {this.state.color} */}
            </h2>
            <span className="post_content_date">2020.07.15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
