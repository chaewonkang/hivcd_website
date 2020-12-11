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
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      })
      .then((data) => {
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
          data.website.toLowerCase().includes(this.state.alumniSearch) ||
          data.year.includes(this.state.alumniSearch)
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
