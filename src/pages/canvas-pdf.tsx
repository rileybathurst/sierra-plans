import React, { useRef, useEffect, useState } from "react";

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

class Welcome extends React.Component {

  // console.log('🐱'); // not allowed here

  componentDidMount() {
    const doc = new jsPDF('p', 'in', 'letter');
    doc.text('text', 0.5, 1);

    console.log('🐱'); // not allowed here

    let text = this.props.name;
    doc.text(text, 0.5, 2);


    let sta = this.props.stated;
    doc.text(sta, 0.5, 3);

    let filename = "hey";
    doc.save(filename);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.name}</h2>
      </div>
    );
  }
}

function LevelUp(props) {
  const canvas = useRef(null);
  console.log(canvas);

  const [stateText, setStateText] = useState('start');
  const [svgImage, setSvgImage] = useState(' ');
  const [canvasImage, setCanvasImage] = useState(' ');

  useEffect(() => {

    setStateText('effected');

    const ctx = canvas.current.getContext("2d");
    console.log(ctx);
    console.log('ctx🦖' + ctx);

    const v = Canvg.fromString(ctx, props.svg);
    console.log('v🦄' + v);

    v.start(); // this is drawing the canvas

    // this is the image part
    const dataURL = canvas.current.toDataURL();
    setSvgImage(dataURL);

    // I dont think I can push it through from here
    {/* <Welcome
      name="third"
      stated={stateText}
      svg=""
    /> */}

  });

  console.log('🐷');

  {/* this is a class as it lets me build the PDF once but needs states as variables are prepared */ }
  // I dont think I can push it through from here
  /*   <Welcome
      name="third"
      stated={stateText}
      svg=""
    /> */

  return (
    <div className="levelup">
      // ? do we need the canvas in a function to get the useeffect?
      {/* create a canvas on the page we can then modify */}
      <canvas
        id="test-show"
        ref={canvas}
      />
      {/* show an image on the page */}
      <img src={svgImage} />

      {/*
// * kinda means it has to come through from here?
// except I dont get the useeffect to update the text
  */}
      <Welcome
        name="third"
        stated={stateText}
        svg=""
      />

    </div>
  );
}

const ClassPage = () => {
  return (
    <>
      Canvas pdf
      {/* // ? what if I do this through a function not a class? */}
      {/* first step is to go through a function to be able to have useeffect */}
      <LevelUp
        svg="<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>"
      />
    </>
  )
}

export default ClassPage