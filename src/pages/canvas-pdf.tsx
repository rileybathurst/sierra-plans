// after canvas-only use the canvg function
// then start adding piece to a pdf by figuring out what I actually need to return
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

// ? does welcome go here?
    // first chance try from here

    </div>
  );
}

const ClassPage = () => {
  return (
    <>
      Canvas pdf
      {/* // ? what if I do this through a function not a class? */}
      <LevelUp
        svg="<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>"
      />

// ? does welcome go here?
    </>
  )
}

export default ClassPage
