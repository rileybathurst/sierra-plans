// after canvas-only use the canvag function
// im backsteping to build up piece by piece

import React, { useRef, useEffect, useState } from "react";

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

function LevelUp(props) {
  const canvas = useRef(null);
  console.log(canvas);

  const [svgImage, setSvgImage] = useState(' ');

  useEffect(() => {

    const ctx = canvas.current.getContext("2d");
    console.log(ctx);

    const v = Canvg.fromString(ctx, props.svg);
    v.start(); // this is drawing the canvas

    // this is the image part
    const dataURL = canvas.current.toDataURL();
    setSvgImage(dataURL);

  });

  return (
    <div className="levelup">
      <canvas
        id="test-show"
        ref={canvas}
      />
      <img src={svgImage} />
    </div>
  );
}

const ClassPage = () => {
  return (
    <>
      Canvas canvg
      {/* // ? what if I do this through a function not a class? */}
      <LevelUp
        svg="<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>"
      />
    </>
  )
}

export default ClassPage
