// in canvas2 Im producing a canvas
// in this step i want to turn it into a png with toDataURL
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

// i was trying to do a double loop thing but I dont think thats going to work
// so skip this one and go to 4

import React, { useRef, useEffect } from "react";

const MyCanvas = (props = {}) => {
  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    context.fillStyle = "orange";
    context.fillRect(0, 0, 100, 100);
  });

  return (
    <canvas ref={canvas} />
  );
};

function Second(props) {

  // const afain = useRef(two);

  /*   useEffect = (() => {
      
    }); */

  return (
    <>
      <MyCanvas ref={two} />
    </>
  );
}

const Canvas3Page = () => {
  return (<>
    <Second />
  </>
  )
}

export default Canvas3Page
