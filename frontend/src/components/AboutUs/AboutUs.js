import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus_wrapper">
      <div className="aboutus_container">
        <div className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>history</span>
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
        <div className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>curriculum</span>
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
        <div className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>map</span>
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
        <div className="aboutus_item">
          <div className="aboutus_item_tag">
            <span>contact</span>
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
