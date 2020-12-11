import React, { Component } from "react";
import "./Alumni.css";
import axios from "axios";
import { AlumniModule, AlumniSearch, LogoImage } from "../../components";

class Alumni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumniId: 1,
      fetching: false,
      alumniInfo: [],
      alumniSearch: null,
    };
  }

  componentDidMount() {
    this.getAlumnis();
  }

  alumniSearchSpace = (e) => {
    let keyword = e.target.value;
    this.setState({
      alumniSearch: keyword,
    });
  };

  getAlumnis = async () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/alumnis/")
      .then(({ data }) => {
        this.setState({
          ...this.state,
          loading: true,
          alumniInfo: data,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  };

  render() {
    const { alumniInfo } = this.state;
    const items = alumniInfo
      .filter((data) => {
        if (this.state.alumniSearch === null) return data;
        else if (
          data.name.toLowerCase().includes(this.state.alumniSearch) ||
          data.phone.includes(this.state.alumniSearch) ||
          data.website.toLowerCase().includes(this.state.alumniSearch)
        )
          return data;
        return;
      })
      .map((data) => {
        return (
          <AlumniModule
            key={data.id}
            year={data.year}
            name={data.name}
            tel={data.phone}
            url={data.website}
          ></AlumniModule>
        );
      });
    return (
      <div className="alumni_wrapper">
        <AlumniSearch
          onChange={(e) => this.alumniSearchSpace(e)}
        ></AlumniSearch>
        <div className="alumni_container">
          <LogoImage style={{ gridColumn: 1 / 1, gridRow: 1 / 1 }}></LogoImage>
          {items}
          {items}
          {items}
          {items}
          {items}
        </div>
      </div>
    );
  }
}

export default Alumni;
