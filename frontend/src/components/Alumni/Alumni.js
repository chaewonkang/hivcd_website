import React, { Component } from "react";
import "./Alumni.css";
import Axios from "axios";
import { async } from "rxjs";
import axios from "axios";
import { AlumniModule } from "../../components";

class Alumni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumniId: 1,
      fetching: false,
      alumniInfo: [],
    };
  }

  componentDidMount() {
    this.getAlumnis();
  }

  getAlumnis = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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
    console.log(alumniInfo);
    return (
      <div className="alumni_wrapper">
        <div className="alumni_container">
          {alumniInfo &&
            alumniInfo.map((alumni) => {
              return (
                <>
                  <AlumniModule
                    key={alumni.id}
                    year={alumni.zipcode}
                    name={alumni.username}
                    tel={alumni.phone}
                    url={alumni.website}
                  ></AlumniModule>
                </>
              );
            })}
          {alumniInfo &&
            alumniInfo.map((alumni) => {
              return (
                <>
                  <AlumniModule
                    key={alumni.id}
                    year={alumni.zipcode}
                    name={alumni.username}
                    tel={alumni.phone}
                    url={alumni.website}
                  ></AlumniModule>
                </>
              );
            })}
          {alumniInfo &&
            alumniInfo.map((alumni) => {
              return (
                <>
                  <AlumniModule
                    key={alumni.id}
                    year={alumni.zipcode}
                    name={alumni.username}
                    tel={alumni.phone}
                    url={alumni.website}
                  ></AlumniModule>
                </>
              );
            })}
          {alumniInfo &&
            alumniInfo.map((alumni) => {
              return (
                <>
                  <AlumniModule
                    key={alumni.id}
                    year={alumni.zipcode}
                    name={alumni.username}
                    tel={alumni.phone}
                    url={alumni.website}
                  ></AlumniModule>
                </>
              );
            })}
          {alumniInfo &&
            alumniInfo.map((alumni) => {
              return (
                <>
                  <AlumniModule
                    key={alumni.id}
                    year={alumni.zipcode}
                    name={alumni.username}
                    tel={alumni.phone}
                    url={alumni.website}
                  ></AlumniModule>
                </>
              );
            })}
          {alumniInfo &&
            alumniInfo.map((alumni) => {
              return (
                <>
                  <AlumniModule
                    key={alumni.id}
                    year={alumni.zipcode}
                    name={alumni.username}
                    tel={alumni.phone}
                    url={alumni.website}
                  ></AlumniModule>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Alumni;
