// ! this is really close but its using a couple hard values not variables

import React, { useRef, useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';

class Welcome extends React.Component {

  componentDidUpdate() {
    const doc = new jsPDF('p', 'in', 'letter');

    let sta = this.props.stated;
    doc.text(sta, 0.5, 3);

    // console.log(this.props.data);

    doc.addImage(this.props.data, 'png', 0.5, 2, 7.5, 8);

    let logo = new Image();
    logo.src = "https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-full_logo-black-fs8.png";
    doc.addImage(logo, 'png', 0.5, 9.2, 1, 0.51);

    let filename = 'hey';
    doc.save(filename);
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
      </>
    );
  }
}

const UpdatePdfPage = () => {

  const [stateText, setStateText] = useState('start');
  const [dataState, setDataState] = useState('before');

  const canvas = useRef(canvas);

  useEffect(() => {
    setStateText('effected');

    // grab the canvas and edit it with the useeffect to only do it once its drawn
    const ctx = canvas.current.getContext("2d");
    const v = Canvg.fromString(ctx, "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>");
    v.start();

    // base64 encode the canvas image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    const dataURL = canvas.current.toDataURL();
    setDataState(dataURL);
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
        data={dataState}
      />
    </>
  );
}

export default UpdatePdfPage
