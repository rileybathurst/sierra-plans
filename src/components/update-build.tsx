// this works but needs to be finished

import React, { useRef, useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';

class Welcome extends React.Component {

  componentDidUpdate() {


    console.log('this.props', this.props);
    console.log('this.props.name 🍔', this.props.plan.name);
    console.log('this.props.areas 🦖 do I need to map this now', this.props.plan.areas);
    console.log('this.props.areas.name 🦖 do I need to map this now', this.props.plan.areas.name);

    const doc = new jsPDF('p', 'in', 'letter', true);

    let name = this.props.plan.name;
    doc.text(name, 0.5, 1);

    doc.setFontSize(12);
    // this is hard coded to the first area which I dont think will be a problem
    let add = `${this.props.plan.address}, ${this.props.plan.areas[0].name}`;
    doc.text(add, 0.5, 1.25);

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

      </>
    );
  }
}

const UpdateBuild = (props = { plan }) => {

  const [dataState, setDataState] = useState(' ');

  const canvas = useRef(canvas);

  useEffect(() => {

    // grab the canvas and edit it with the useeffect to only do it once its drawn
    const ctx = canvas.current.getContext("2d");
    const v = Canvg.fromString(ctx, props.plan.svg);
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
        // id="test-show"
        ref={canvas}
        width="2550" height="2550"
      />
      <Welcome
        // try send less arguments and grab them above as we need everything
        plan={props.plan}

        // but this is different as its being adapted
        data={dataState}
      />
      <h1>{props.plan.name}</h1>
      <h2>{props.plan?.areas[0].name}</h2>
      <img src={dataState} alt="the svg but its an image" className="measure" />
    </>
  );
}

export default UpdateBuild
