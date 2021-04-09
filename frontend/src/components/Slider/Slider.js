import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import styled from "styled-components";

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

export default function Slider({ items }) {
  const TOTAL_SLIDES = items.length - 1;
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
          <Slide key={item.key} img={item.photo}></Slide>
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
}
