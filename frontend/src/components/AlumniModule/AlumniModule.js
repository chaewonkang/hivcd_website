import React from "react";
import "./AlumniModule.css";
import getCookie from "../../utils/getCookie";
import a1 from "../../img/alumni_1.png";
import a2 from "../../img/alumni_2.png";
import a3 from "../../img/alumni_3.png";
import a4 from "../../img/alumni_4.png";
import a5 from "../../img/alumni_5.png";
import a6 from "../../img/alumni_6.png";
import a7 from "../../img/alumni_7.png";
import a8 from "../../img/alumni_8.png";

const AlumniModule = ({ year, name, tel, url }) => {
  const randomImg = [a1, a2, a3, a4, a5, a6, a7, a8];
  const randomIdx1 = Math.floor(Math.random() * randomImg.length);
  const randomIdx2 = Math.floor(Math.random() * randomImg.length);
  const randomIdx3 = Math.floor(Math.random() * randomImg.length);

  return (
    <div className="alumni_module_container">
      {year}
      <br></br>
      {name}
      <br></br>
      {getCookie("SUSER_ID") !== null ? (
        <>
          {tel} <br></br>
        </>
      ) : (
        <>
          <img src={randomImg[randomIdx1]} style={{ width: 10 + "%" }}></img>
          <img src={randomImg[randomIdx2]} style={{ width: 10 + "%" }}></img>
          <img src={randomImg[randomIdx3]} style={{ width: 10 + "%" }}></img>
          <br></br>
        </>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        alt="alumni_url"
        className="alumni_url"
      >
        {url}
      </a>
    </div>
  );
};

export default AlumniModule;
