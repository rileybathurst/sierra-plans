import React, { useRef, useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';

class Welcome extends React.Component {

  componentDidUpdate() {
    const doc = new jsPDF('p', 'in', 'letter');

    let sta = this.props.stated;
    doc.text(sta, 0.5, 3);

    let filename = 'hey';
    doc.save(filename);
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        {/* <canvas ref={canvas} width="2550" height="2550" /> */}
      </>
    );
  }
}

const UpdateCanvasPage = () => {

  const [stateText, setStateText] = useState('start');

  const canvas = useRef(canvas);
  const [canvasImage, setCanvasImage] = useState(' ');

  useEffect(() => {
    setStateText('effected');

    // grab the canvas and edit it with the useeffect to only do it once its drawn
    const ctx = canvas.current.getContext("2d");
    const v = Canvg.fromString(ctx, "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>");
    v.start();

  });

  return (
    <>
      {/* put a canvas here but its blank */}
      <canvas
        id="test-show"
        ref={canvas}
        width="100" height="100"
      />
      <Welcome
        stated={stateText}
      />
    </>
  );
}

export default UpdateCanvasPage
