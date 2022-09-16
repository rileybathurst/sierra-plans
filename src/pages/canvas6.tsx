// view as a single image only

import React, { useRef, useEffect, useState } from "react";

const MyCanvas = (props = {}) => {
  const canvas1 = useRef(null); // this is supposed to be null not canvas?

  const [count, setCount] = useState('hey');

  useEffect(() => {
    const context = canvas1.current.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(0, 0, 100, 100);

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

const Canvas6Page = () => {
  return (
    <>
      <MyCanvas />
      {/* <div className="test">test</div> */}
    </>
  )
}

export default Canvas6Page
