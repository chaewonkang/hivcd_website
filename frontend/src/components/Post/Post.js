import React, { useState, useRef } from "react";
import { PostModule } from "../../components";
import "./Post.css";

function Post({ title, id, category, date }) {
  const [style, setStyle] = useState({
    backgroundColor: null,
    border: null,
  });

  const colorArray = [
    "#A3B3C4",
    "#00F5C6",
    "#93F421",
    "#9452FF",
    "#FDFBC1",
    "#BC791E",
    "#00C4FF",
    "#FF3333",
    "#FF01FF",
    "#DEADF0",
    "#9099FF",
    "#3EA455",
    "#FECC99",
    "#959B01",
    "#CDCC33",
  ];

  const borderColorArray = [
    "#78A4B7",
    "#47D2DD",
    "#64CB0C",
    "#6E12D6",
    "#CFD372",
    "#935B0F",
    "#094EFF",
    "#B74A6C",
    "#E00000",
    "#BB12D8",
    "#6F55FF",
    "#0F7946",
    "#FD9191",
    "#495B1D",
    "#A8B419",
  ];

  const randomIndex = Math.floor(Math.random() * 15);
  const selectedColor = colorArray[randomIndex];
  const selectedBorderColor = borderColorArray[randomIndex];

  const willMount = useRef(true);

  if (willMount.current) {
    setStyle({
      ...style,
      backgroundColor: selectedColor,
      border: `1px solid ${selectedBorderColor}`,
    });
  }

  willMount.current = false;

  return (
    <PostModule
      style={style}
      title={title}
      id={id}
      category={category}
      date={date}
    ></PostModule>
  );
}

export default Post;
