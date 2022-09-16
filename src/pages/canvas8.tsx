// Canvg.fromString(ctx
// https://codesandbox.io/s/github/canvg/canvg/tree/master/sandboxes/browser?from-embed=&file=/index.html:268-379

import React, { useRef, useEffect, useState } from "react";
import { Canvg } from 'canvg';

const MyCanvas = (props = {}) => {
  const canvas1 = useRef(null);

  const [count, setCount] = useState('hey');

  useEffect(() => {
    const context = canvas1.current.getContext("2d");
    const v = Canvg.fromString(context, '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>');
    v.start();

    const dataURL = canvas1.current.toDataURL();
    console.log(dataURL);

    setCount(dataURL);
  });

  return (
    <>
      <canvas ref={canvas1} />
      <img src={count} />
    </>
  );
};

const Canvas8Page = () => {
  return (
    <>
      <MyCanvas />
    </>
  )
}

export default Canvas8Page
