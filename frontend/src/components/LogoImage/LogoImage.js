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
      },
    };
  }

  componentWillMount() {
    const pictureArray = [logoImageA, logoImageB, logoImageC, logoImageD];
    const randomIdx = Math.floor(Math.random() * pictureArray.length);
    const selectedImg = pictureArray[randomIdx];

    this.setState({
      style: {
        ...this.state.style,
        backgroundImage: `url(${selectedImg})`,
      },
    });
  }

  render() {
    return (
      <div className="logo_container">
        <div style={this.state.style} className="logoImage"></div>
      </div>
    );
  }
}

export default LogoImage;
