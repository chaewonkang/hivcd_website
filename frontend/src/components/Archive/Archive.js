import React, { useState, useRef, useEffect } from "react";
import "./Archive.css";
import styled from "styled-components";
import logogif from "../../img/logogif.gif";
import ex1 from "../../img/carousel_1.jpg";
import ex2 from "../../img/carousel_2.jpg";
import ex3 from "../../img/carousel_3.jpg";
import ex4 from "../../img/carousel_4.jpg";
import ex5 from "../../img/carousel_5.jpg";
import useAsync from "../../utils/useAsync";
import axios from "axios";
import Slider from "../Slider/Slider";

async function getArchives() {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/archive/"
  );
  return response.data;
}

function Archive() {
  const [archives] = useAsync(() => getArchives());
  const { loading, data: list, error } = archives;
  const [post, setPost] = useState(null);

  useEffect(() => {}, [post]);

  async function getArchive(archiveId) {
    const response = await axios
      .get(`https://sidi.hongik.ac.kr/api/v1/postings/archive/${archiveId}`)
      .then((response) => {
        const ret = response.data;
        setPost(ret);
      });
    return response;
  }

  if (loading)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );

  if (error)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );

  if (!list) return null;

  if (!post && list)
    return (
      <div className="archive_container">
        <div className="archive_index_container_before">
          {list.map((data) => {
            return (
              <div key={data.pk} className="archive_index_box">
                <div className="archive_index_box_text">
                  <div
                    className="archive_index_box_text_title"
                    onClick={() => {
                      setPost(getArchive(data.pk));
                    }}
                  >
                    {data.title}
                  </div>
                  <div className="archive_index_box_text_date">
                    {data.created_at ? data.created_at.slice(0, 10) : null}
                  </div>
                </div>
                <div className="archive_index_box_image">
                  <span>Archive</span>
                  <img
                    src={data.photos.length ? data.photos[0].photo : null}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );

  if (post && list)
    return (
      <div className="archive_container">
        <div className="archive_wrapper">
          <div className="archive_wrapper_text">
            <div className="archive_wrapper_text_title">
              <span>{post.title}</span>
            </div>
            <div className="archive_wrapper_text_date">
              <span>
                {post.created_at ? post.created_at.slice(0, 10) : null}
              </span>
            </div>
            <div className="archive_wrapper_text_body">
              <span>{post.text}</span>
            </div>
            <div className="archive_wrapper_text_link">
              <span>{post.link}</span>
            </div>
          </div>
          <div className="archive_wrapper_slider">
            {post.photos ? <Slider items={post.photos}></Slider> : null}
          </div>
        </div>
        <div className="archive_index_container">
          {list.map((data) => {
            return (
              <div key={data.pk} className="archive_index_box">
                <div className="archive_index_box_text">
                  <div
                    className="archive_index_box_text_title"
                    onClick={() => {
                      setPost(getArchive(data.pk));
                    }}
                  >
                    {data.title}
                  </div>
                  <div className="archive_index_box_text_date">
                    {data.created_at ? data.created_at.slice(0, 10) : null}
                  </div>
                </div>
                <div className="archive_index_box_image">
                  <span>Archive</span>
                  <img
                    src={data.photos.length ? data.photos[0].photo : null}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  return null;
}

export default Archive;
