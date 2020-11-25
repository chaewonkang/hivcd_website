import React, { Component } from "react";
import logoImageA from "../../img/logoImage_A.png";
import logoImageB from "../../img/logoImage_B.png";
import logoImageC from "../../img/logoImage_C.png";
import logoImageD from "../../img/logoImage_D.png";
import "./LogoImage.css";

class LogoImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "95%",
		gridColumn: null,
		gridRow: null,
      },
    };
  }

  componentWillMount() {
	const pictureArray = [logoImageA, logoImageB, logoImageC, logoImageD];
	const columnArray = ["2/3", "3/4", "1/2", "4/5"];
	const rowArray = ["2/3", "3/4", "4/5", "1/2"];
    const randomIdx = Math.floor(Math.random() * pictureArray.length);
	const selectedImg = pictureArray[randomIdx];
	const selectedColumn = columnArray[randomIdx];
	const selectedRow = rowArray[randomIdx];


	// 로고이미지
	// grid-column: 1 / 2; grid-row: 1 / 2;
	// grid-column: 3 / 4; grid-row: 2 / 3;
	// grid-column: 4 / 5; grid-row: 3 / 4;
	// grid-column: 5 / 6; grid-row: 4 / 5;
    this.setState({
      style: {
        ...this.state.style,
		backgroundImage: `url(${selectedImg})`,
		gridColumn: selectedColumn,
		gridRow: selectedRow
      },
    });
  }

  render() {
    return (
        <div style={this.state.style} className="logoImage"></div>
    );
  }
}

export default LogoImage;
