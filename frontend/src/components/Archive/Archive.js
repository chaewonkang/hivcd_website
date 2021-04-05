import React, { useState, useRef, useEffect } from "react";
import "./Archive.css";
import styled from "styled-components";
import logogif from "../../img/logogif.gif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ex1 from "../../img/carousel_1.jpg";
import ex2 from "../../img/carousel_2.jpg";
import ex3 from "../../img/carousel_3.jpg";
import ex4 from "../../img/carousel_4.jpg";
import ex5 from "../../img/carousel_5.jpg";

const items = [
  { id: 1, url: ex1 },
  { id: 2, url: ex2 },
  { id: 3, url: ex3 },
  { id: 4, url: ex4 },
  { id: 5, url: ex5 },
];

function Slide({ img }) {
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

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
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
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {items.map((item) => (
          <Slide img={item.url}></Slide>
        ))}
      </SliderContainer>
      <div className="arrows_and_number_container">
        <div>
          <Button onClick={prevSlide} className="navigate_left_button"></Button>
        </div>
        <div style={{ textAlign: "center" }}>
          {currentSlide}/{TOTAL_SLIDES}
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
}

function Archive() {
  return (
    <div className="archive_container">
      <div className="archive_wrapper">
        <div className="archive_wrapper_text">
          <div className="archive_wrapper_text_title">
            <span>2020 졸업전시회 도록</span>
          </div>
          <div className="archive_wrapper_text_date">
            <span>2020.20.20</span>
          </div>
          <div className="archive_wrapper_text_body">
            <span>
              2020 와우영상제는 드로마픽, 그린비, 한글꼴연구회, 힙스 외 10명의
              참가자가 총 5편의 장편, 50편의 단편 영상을 상영했습니다. 대상은
              어쩌구저쩌구 팀의 “내일 저녁은 무엇을 먹을까?”입니다.
            </span>
          </div>
          <div className="archive_wrapper_text_link">
            <span>https://google.com</span>
          </div>
        </div>
        <div className="archive_wrapper_slider">
          <Slider></Slider>
        </div>
      </div>
      <div className="archive_index_container">
        <div className="archive_index_box">
          <div className="archive_index_box_text">
            <div className="archive_index_box_text_title">
              홍익대학교 융합예술연구센터 인터랩(INTERLAB), 런던 파이돈 출판사서
              한국현대미술 영문저서 출판
            </div>
            <div className="archive_index_box_text_date">2020.20.20</div>
          </div>
          <div className="archive_index_box_image">
            <span>Hello</span>
            <img src={logogif}></img>
          </div>
        </div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
        <div className="archive_index_box"></div>
      </div>
    </div>
  );
}

export default Archive;
