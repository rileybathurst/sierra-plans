import React, { useRef, useEffect } from "react";

const MyCanvas = (props = {}) => {
  const canvas1 = useRef(null); // this is supposed to be null not canvas?

  useEffect(() => {
    const context = canvas1.current.getContext("2d");
    context.fillStyle = "orange";
    context.fillRect(0, 0, 100, 100);

    const dataURL = canvas1.current.toDataURL();
    console.log(dataURL);
  });

  return (
    <>
      <canvas ref={canvas1} />

      {/* <img src={dataURL()} /> making this as a variable doesnt quite help */}
      {/* this has to be turned off but then can be built */}
      <img src={canvas1.current.toDataURL()} />

    </>
  );
};

const Canvas4Page = () => {
  return (
    <MyCanvas />
  )
}

export default Canvas4Page
