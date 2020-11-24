import React from "react";
import "./HomeArchive.css";

const HomeArchive = () => (
  <div className="archive">
    <div className="archive_tag">
      <span>archive</span>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="archive_content col-lg-8">
          <h2 className="archive_content_header">
            2018 시각디자인과 졸업주간<br></br>
            Hongik University <br></br>
            Visual Communication Design <br></br>
            Graduation Week 2018 <br></br>
            Ms. John & Mr. Jane <br></br>
            2018. 12. 3 – 8 <br></br>
            홍문관 1층, 7층 <br></br>R Floor 2, Floor 7
          </h2>
          <span className="archive_content_date"></span>
        </div>
        <div className="archive_image col-lg-4 image_fill"></div>
      </div>
    </div>
  </div>
);

export default HomeArchive;
