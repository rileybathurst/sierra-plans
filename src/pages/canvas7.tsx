// use more of an svg code
// this is going to be really important
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc

// this is when I get back to canvg jump back to canvg2 for a min

import React, { useRef, useEffect, useState } from "react";

const MyCanvas = (props = {}) => {
  const canvas1 = useRef(null); // this is supposed to be null not canvas?

  const [count, setCount] = useState('hey');

  useEffect(() => {
    const context = canvas1.current.getContext("2d");
    // context.fillStyle = "blue";
    // context.fillRect(0, 0, 100, 100);

    context.beginPath();
    context.moveTo(10, 30);
    // arc(x, y, radius, startAngle, endAngle)
    context.arc(20, 20, 0, 0, 1);
    context.arc(20, 20, 0, 0, 1);
    context.stroke();

    const dataURL = canvas1.current.toDataURL();
    console.log(dataURL);

    setCount(dataURL);
  });

  return (
    <>
      <canvas ref={canvas1} />
      {/* {dataURL} */}
      {/* {count} */}
      <img src={count} />
    </>
  );
};

const Canvas7Page = () => {
  return (
    <>
      <MyCanvas />
      {/* <div className="test">test</div> */}

      {/* // A rx ry x-axis-rotation large-arc-flag sweep-flag x y */}
      {/* // a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy */}
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 10,30
          A 20,20 0,0,1 50,30
          A 20,20 0,0,1 90,30
          Q 90,60 50,90
          Q 10,60 10,30 z" />
      </svg>

    </>
  )
}

export default Canvas7Page
