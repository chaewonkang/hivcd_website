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

async function getArchives() {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/archive/"
  );
  return response.data;
}

const items = [
  { id: 1, url: ex1 },
  { id: 2, url: ex2 },
  { id: 3, url: ex3 },
  { id: 4, url: ex4 },
  { id: 5, url: ex5 },
];

function Slide({ img, caption }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 100%;
`;

const Container = styled.div`
  width: calc(100% - 20px);
  overflow: hidden;
  height: 100%;
`;

const Button = styled.button`
  all: unset;
  color: #000;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #000;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 90%;
`;

const TOTAL_SLIDES = items.length - 1;

function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {items.map((item) => (
          <Slide key={item.key} img={item.url}></Slide>
        ))}
      </SliderContainer>
      <div className="arrows_and_number_container">
        <div>
          <Button onClick={prevSlide} className="navigate_left_button"></Button>
        </div>
        <div className="date">
          <span>
            {currentSlide} / {TOTAL_SLIDES}
          </span>
        </div>
        <div>
          <Button
            onClick={nextSlide}
            className="navigate_right_button"
            style={{ right: 20 }}
          ></Button>
        </div>
      </div>
    </Container>
  );
  return null;
}

function Archive() {
  const [archives] = useAsync(() => getArchives());
  const { loading, data: list, error } = archives;
  const [post, setPost] = useState(null);

  async function getArchive(archiveId) {
    const response = await axios
      .get(`https://sidi.hongik.ac.kr/api/v1/postings/archive/${archiveId}`)
      .then((response) => {
        const ret = response.data;
        setPost(ret);
      });
    return response;
  }

  useEffect(() => {}, []);

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

  if (!post)
    return (
      <div className="archive_container">
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
                    {data.updated_at}
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

  if (post)
    return (
      <div className="archive_container">
        <div className="archive_wrapper">
          <div className="archive_wrapper_text">
            <div className="archive_wrapper_text_title">
              <span>{post.title}</span>
            </div>
            <div className="archive_wrapper_text_date">
              <span>{post.updated_at}</span>
            </div>
            <div className="archive_wrapper_text_body">
              <span>{post.text}</span>
            </div>
            <div className="archive_wrapper_text_link">
              <span>{post.link}</span>
            </div>
          </div>
          <div className="archive_wrapper_slider">
            <Slider images={post.photos}></Slider>
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
                    {data.updated_at}
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
}

export default Archive;
