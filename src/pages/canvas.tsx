import React, { useRef, useEffect, useState } from "react";

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

class Welcome extends React.Component {

  componentDidMount() {
    const canvas = useRef(null);

    const doc = new jsPDF('p', 'in', 'letter');
    doc.text('text', 0.5, 1);

    let text = this.props.name;
    doc.text(text, 0.5, 2);
    let filename = "hey";

    // doc.save(filename);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.name}.</h2>

        <canvas ref={canvas} width="2550" height="2550" />
        {/* show the image we are taking to the pdf */}
        {/* <img src={svgImg} alt="the svg but its an image" className="measure" /> */}

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
