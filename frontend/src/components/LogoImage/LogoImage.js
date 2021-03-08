import React, { useState, useRef } from "react";
import logoImageA from "../../img/logoImage_A.png";
import logoImageB from "../../img/logoImage_B.png";
import logoImageC from "../../img/logoImage_C.png";
import logoImageD from "../../img/logoImage_D.png";
import "./LogoImage.css";
import logogif from "../../img/logogif.gif";

function LogoImage() {
  const [style, setStyle] = useState({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70%",
  });

  const pictureArray = [logoImageA, logoImageB, logoImageC, logoImageD];
  //   const columnArray = ["1/2"];
  //   const rowArray = ["1/2"];
  //   const randomIdx = Math.floor(Math.random() * pictureArray.length);
  //   const selectedColumn = columnArray[randomIdx];
  //   const selectedRow = rowArray[randomIdx];
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
