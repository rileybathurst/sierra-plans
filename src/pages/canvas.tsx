import React, { useRef, useEffect, useState } from "react";

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

// ? can I build the canvas up here?

// ! i got close but just get everything out for now

function CC(props) {
  const [count, setCount] = useState(' ');
  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const v = Canvg.fromString(context, "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>");
    v.start(); // this is drawing the canvas
    const dataURL = canvas.current.toDataURL();

    console.log(dataURL);

    setCount(dataURL);
  });

  console.log("🦄");
  console.log(canvas);

  return (
    <>
      <canvas ref={canvas} width="2550" height="2550" />
      <img src={count} alt="the svg but its an image" className="measure" />
    </>
  );
}

class Welcome extends React.Component {

  componentDidMount() {
    // const canvas = useRef(null);

    const doc = new jsPDF('p', 'in', 'letter');
    doc.text('text', 0.5, 1);

    let text = this.props.name;
    doc.text(text, 0.5, 2);
    let filename = "hey";

    // thios doesnt work here it works below for the image <CC />

    // doc.addImage(dataURL, 'png', 0.5, 2, 7.5, 8);

    // doc.save(filename);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.name}.</h2>

        <CC />
        {/* // what i need to return is the dataURL */}

      </div>
    );
  }
}

const ClassPage = () => {
  return (
    <>
      class
      <Welcome name="pop" />
    </>
  )
}

export default ClassPage
