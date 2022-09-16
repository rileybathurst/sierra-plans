// 10 skipped a step I need to use the variable in stron

import React, { useRef, useEffect, useState } from "react";
import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

const MyCanvas = (props = {}) => {
  const canvas1 = useRef(null);

  const [count, setCount] = useState('hey');

  useEffect(() => {
    const context = canvas1.current.getContext("2d");
    const v = Canvg.fromString(context, '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>');
    v.start();

    const dataURL = canvas1.current.toDataURL();

    setCount(dataURL);

    const doc = new jsPDF();
    doc.text('now', 10, 10);
    doc.addImage(dataURL, 'png', 10, 30, 150, 76); // these 
    doc.save('again');
  });

  return (
    <>
      {/* {count} */}
      <canvas ref={canvas1} />
      <img src={count} alt="the svg but its an image" />
    </>
  );
};

const Canvas11Page = () => {
  return (
    <>
      <MyCanvas />

    </>
  )
}

export default Canvas11Page
