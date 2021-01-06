import React, { useState, useEffect } from "react";
import "./Alumni.css";
import axios from "axios";
import { AlumniModule, AlumniSearch, LogoImage } from "../../components";

function Alumni() {
  const [alumniInfo, setAlumniInfo] = useState([]);
  const [alumniSearch, setAlumniSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAlumnis();
  }, []);

  const alumniSearchSpace = (e) => {
    let keyword = e.target.value;
    setAlumniSearch(keyword);
  };

  const getAlumnis = () => {
    axios
      .get(
        "http://13.125.84.10:8000/api/v1/alumnis/",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            Accept: "application/json",
            "Content-type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        setAlumniInfo(data);
        setLoading(true);
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  const items = alumniInfo
    .filter((data) => {
      if (alumniSearch === null) return data;
      else if (
        data.name.toLowerCase().includes(alumniSearch) ||
        data.phone.includes(alumniSearch) ||
        data.website.toLowerCase().includes(alumniSearch) ||
        data.year.includes(alumniSearch)
      )
        return data;
      return null;
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
      <AlumniSearch onChange={(e) => alumniSearchSpace(e)}></AlumniSearch>
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

export default Alumni;
