import React, { useRef, useEffect } from "react";
import type { HeadFC } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

// import { jsPDF } from "jspdf";

// https://codesandbox.io/s/8k7qro3wvj?file=/src/index.js:0-979

const MyCanvas = (props = {}) => {
  // Declare a new state variable, which we'll call "count"
  const {
    width = 100,
    height = 100,
    pixelRatio = window.devicePixelRatio
  } = props;

  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(pixelRatio, pixelRatio);
    context.fillStyle = "hsl(0, 0%, 95%)";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "black";
    context.beginPath();
    context.arc(width / 2, height / 2, width / 4, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  });

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const style = { width, height };
  return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};

const CanvasPage = () => {
  return (
    <main>
      <MyCanvas />
    </main>
  )
}

export default CanvasPage

export const Head: HeadFC = () => <title>Canvg Page</title>













