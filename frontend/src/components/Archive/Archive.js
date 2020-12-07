import React, { Component } from "react";
import "./Archive.css";
import axios from "axios";
import { ArchiveModule } from "../../components";

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      archiveInfo: [],
      archiveFilter: null,
    };
  }

  componentDidMount() {
    this.getArchiveInfo();
  }

  getArchiveInfo = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        this.setState({
          ...this.state,
          fetching: true,
          archiveInfo: data,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          ...this.state,
          fetching: false,
        });
      });
  };

  render() {
    const { archiveInfo } = this.state;
    const items = archiveInfo
      .slice(0, 100)
      .filter((data) => {
        if (this.state.archiveFilter === null) return data;
        else if (data.title.includes(this.state.archiveFilter)) return data;
        return;
      })
      .map((data) => {
        return (
          <ArchiveModule
            key={data.id}
            title={data.title}
            thumbnailUrl={data.thumbnailUrl}
          ></ArchiveModule>
        );
      });
    return (
      <>
        <div className="archive_wrapper">
          <div className="archive_filter_wrapper">
            <div className="archive_filter_container">
              <button
                className="archive_filter_option"
                onClick={() =>
                  this.setState({
                    ...this.state,
                    archiveFilter: null,
                  })
                }
              >
                ALL
              </button>
              <button
                className="archive_filter_option"
                onClick={() =>
                  this.setState({
                    ...this.state,
                    archiveFilter: "accu",
                  })
                }
              >
                GRADUATION EXHIBITION
              </button>
              <button
                className="archive_filter_option"
                onClick={() =>
                  this.setState({
                    ...this.state,
                    archiveFilter: "velit",
                  })
                }
              >
                WOW FILM FESTIVAL
              </button>
              <button
                className="archive_filter_option"
                onClick={() =>
                  this.setState({
                    ...this.state,
                    archiveFilter: "dolore",
                  })
                }
              >
                ETC
              </button>
            </div>
          </div>
          <div className="archive_container">{items}</div>
        </div>
      </>
    );
  }
}

export default Archive;
