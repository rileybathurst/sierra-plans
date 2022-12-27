// a combination of PDF Builder and older build
// and class which downloads only once

// ! this isnt made yet.

import React, { useRef, useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

import Markdown from "../components/markdown";
import Logo from "../images/logo";

class PDFBuild extends React.Component {

  componentDidMount() {

    // bring the canvas up
    // const canvas = useRef(null);

    // be able to take the svg back down
    // empty but a string
    // const [count, setCount] = useState(' ');

    // the way canvas are drawn this has to wait
    // * maybe not useEffect(() => {
    // make the canvas editable
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
    // const context = canvas.current.getContext("2d");

    // const v = Canvg.fromString(context, this.props.svv);
    // v.start(); // this is drawing the canvas

    // base64 encode the canvas image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    // const dataURL = canvas.current.toDataURL();
    // setCount(dataURL);
    // console.log(dataURL); */

    // create the pdf
    const doc = new jsPDF('p', 'in', 'letter');
    // text, offset x, offset y
    doc.text(this.props.name, 0.5, 1);

    doc.setFontSize(12);
    let add = `${this.props.address}, ${this.props.area}`;
    doc.text(add, 0.5, 1.25);

    // doc.text(props.notes, 0.5, 2); // needs to be line broken

    doc.setFontSize(9);

    if (this.props.notes) {
      var splitNote = doc.splitTextToSize(this.props.notes, 7);
      doc.text(splitNote, 0.5, 1.5);
    }

    // ? add a prop for tall or wide images?

    // imageData, format, x, y, width, height
    // * hold off doc.addImage(dataURL, 'png', 0.5, 2, 7.5, 8);

    // line(x1, y1, x2, y2, style)
    doc.setLineWidth(0.01);

    if (this.props.createdAt !== this.props.updatedAt) {
      let dates = `Created: ${this.props.createdAt} Updated: ${this.props.updatedAt}`;
      doc.text(dates, 0.5, 9);
    } else {
      doc.text(`Created: ${this.props.updatedAt}`, 0.5, 9);
    }

    doc.line(0.5, 9.1, 8, 9.1);

    let logo = new Image();
    // logo.src = "../../images/sierra_lighting-full_logo-black-fs8.png";
    logo.src = "https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-full_logo-black-fs8.png";
    doc.addImage(logo, 'png', 0.5, 9.2, 1, 0.51);

    // doc.text('info@sierra.lighting', 2, 9.4);
    // doc.text('Nevada Number: (775) 525-1898', 2, 9.6);
    // doc.text('California Number: (530) 414-9899', 2, 9.8);

    let filename = `${this.props.name} ${this.props.slug} ${this.props.updatedAt}`;

    doc.save(filename);
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <h3>{this.props.address},&nbsp;{this.props.area}</h3>

        <Markdown notes={this.props.notes} />

        {/* we need a canvas built but we dont actually show it */}
        {/* // * hold off <canvas ref={canvas} width="2550" height="2550" /> */}
        {/* show the image we are taking to the pdf */}
        {/* // * hold off <img src={count} alt="the svg but its an image" className="measure" /> */}

        < hr />


        <section>
          <div className="dates">
            <p>Created at: {this.props.createdAt}</p>
            <p>Updated at: {this.props.updatedAt}</p>
          </div>
        </section>

        <div className="plan__footer">
          <Logo />
          <p>info@sierra.lighting<br />
            Nevada Number: (775) 525-1898<br />
            California Number: (530) 414-9899
          </p>
        </div>
      </>
    );
  }
}

export default PDFBuild;