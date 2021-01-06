import React, { Component } from "react";
import logoImageA from "../../img/logoImage_A.png";
import logoImageB from "../../img/logoImage_B.png";
import logoImageC from "../../img/logoImage_C.png";
import logoImageD from "../../img/logoImage_D.png";
import "./LogoImage.css";
import logogif from "../../img/logogif.gif";

class LogoImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "90%",
        gridColumn: null,
        gridRow: null,
      },
    };
  }

  UNSAFE_componentWillMount() {
    const pictureArray = [logoImageA, logoImageB, logoImageC, logoImageD];
    const columnArray = ["1/2"];
    const rowArray = ["1/2"];
    const randomIdx = Math.floor(Math.random() * pictureArray.length);
    // const selectedImg = pictureArray[randomIdx];
    const selectedColumn = columnArray[randomIdx];
    const selectedRow = rowArray[randomIdx];

    this.setState({
      style: {
        ...this.state.style,
        backgroundImage: `url(${logogif})`,
        gridColumn: selectedColumn,
        gridRow: selectedRow,
      },
    });
  }

  render() {
    return <div style={this.state.style} className="logoImage"></div>;
  }
}

export default LogoImage;
