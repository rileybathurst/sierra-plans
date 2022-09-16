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

const Canvas2Page = () => {
  return (
    <MyCanvas />
  )
}

export default Canvas2Page
