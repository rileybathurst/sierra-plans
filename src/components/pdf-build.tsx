// a combination of PDF Builder and older build
// and class which downloads only once

// ! this isnt made yet.

import React, { useRef, useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

import Markdown from "../components/markdown";
import Logo from "../images/logo";

const PDFBuild = (props = {}) => {
  // bring the canvas up
  const canvas = useRef(null);

  // be able to take the svg back down
  // empty but a string
  const [count, setCount] = useState(' ');

  // the way canvas are drawn this has to wait
  useEffect(() => {
    // make the canvas editable
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
    const context = canvas.current.getContext("2d");

    const v = Canvg.fromString(context, props.svv);
    v.start(); // this is drawing the canvas

    // base64 encode the canvas image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    const dataURL = canvas.current.toDataURL();
    setCount(dataURL);
    // console.log(dataURL);

    // create the pdf
    const doc = new jsPDF('p', 'in', 'letter');
    // text, offset x, offset y
    doc.text(props.name, 0.5, 1);

    doc.setFontSize(12);
    let add = `${props.address}, ${props.area}`;
    doc.text(add, 0.5, 1.25);

    // doc.text(props.notes, 0.5, 2); // needs to be line broken

    doc.setFontSize(9);

    if (props.notes) {
      var splitNote = doc.splitTextToSize(props.notes, 7);
      doc.text(splitNote, 0.5, 1.5);
    }

    // ? add a prop for tall or wide images?

    // imageData, format, x, y, width, height
    doc.addImage(dataURL, 'png', 0.5, 2, 7.5, 8);

    // line(x1, y1, x2, y2, style)
    doc.setLineWidth(0.01);
    // doc.line(0.5, 8, 8, 8);

    /*     if (props.teams.length > 0) {
          let people = 'Plan by: ';
    
          props.teams.forEach(team =>
            people = people.concat(team.name, ' ')
          );
    
          doc.text(people, 0.5, 8.5);
        } */

    if (props.createdAt !== props.updatedAt) {
      let dates = `Created: ${props.createdAt} Updated: ${props.updatedAt}`;
      doc.text(dates, 0.5, 9);
    } else {
      doc.text(`Created: ${props.updatedAt}`, 0.5, 9);
    }

    doc.line(0.5, 9.1, 8, 9.1);

    let logo = new Image();
    // logo.src = "../../images/sierra_lighting-full_logo-black-fs8.png";
    logo.src = "https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-full_logo-black-fs8.png";
    doc.addImage(logo, 'png', 0.5, 9.2, 1, 0.51);

    // doc.text('info@sierra.lighting', 2, 9.4);
    // doc.text('Nevada Number: (775) 525-1898', 2, 9.6);
    // doc.text('California Number: (530) 414-9899', 2, 9.8);

    let filename = `${props.name} ${props.slug} ${props.updatedAt}`;

    doc.save(filename); // ! creates a file which is turned off for testing
  });

  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.address},&nbsp;{props.area}</h3>

      <Markdown notes={props.notes} />

      {/* we need a canvas built but we dont actually show it */}
      <canvas ref={canvas} width="2550" height="2550" />
      {/* show the image we are taking to the pdf */}
      <img src={count} alt="the svg but its an image" className="measure" />

      <hr />

      {/* // todo: needs a couple of if statements */}
      <section>
        {/*         <p>Who built these plans</p>
        <ul>
          {props.teams.map((team, index) => (
            <li key={index}>{team.name}</li>
          ))}
        </ul> */}
        <div className="dates">
          <p>Created at: {props.createdAt}</p>
          <p>Updated at: {props.updatedAt}</p>
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
};

export default PDFBuild;