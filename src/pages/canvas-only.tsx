// build a canvas-only page through the react class

import React, { useRef, useEffect, useState } from "react";

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

function LevelUp() {
  const canvas = useRef(null);
  console.log(canvas);

  useEffect(() => {

    const ctx = canvas.current.getContext("2d");
    console.log(ctx);

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);

  });

  return (
    <div className="levelup">
      <canvas
        id="test-show"
        ref={canvas}
      />
    </div>
  );
}

const ClassPage = () => {
  return (
    <>
      Canvas Only
      {/* // ? what if I do this through a function not a class? */}
      <LevelUp />
    </>
  )
}

export default ClassPage
