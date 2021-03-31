import React, { useState, useRef } from "react";
import "./LogoImage.css";
import logogif from "../../img/logogif.gif";
import H_1 from "../../img/ㅎ_1.gif";
import H_2 from "../../img/ㅎ_2.gif";
import I_1 from "../../img/ㅇ_1.gif";
import I_2 from "../../img/ㅇ_2.gif";
import S_1 from "../../img/ㅅ_1.gif";
import S_2 from "../../img/ㅅ_2.gif";
import D_1 from "../../img/ㄷ_1.gif";
import D_2 from "../../img/ㄷ_2.gif";

function LogoImage({ postCount }) {
  const [style, setStyle] = useState({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70%",
  });

  const pictureArray = [H_1, I_1, S_1, D_1];
  const columnArray = ["1/2"];
  const rowArray = ["1/2"];
  const randomIdx = Math.floor(Math.random() * pictureArray.length);
  const selectedColumn = columnArray[randomIdx];
  const selectedRow = rowArray[randomIdx];
  const willMount = useRef(true);

  if (willMount.current) {
    setStyle({
      ...style,
      backgroundImage: `url(${logogif})`,
    });
  }

  willMount.current = false;

  return <div style={style} className="logoImage"></div>;
}

export default LogoImage;
