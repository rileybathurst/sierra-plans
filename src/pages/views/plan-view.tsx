import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function Markdown(props) {
  // console.log(props.notes);
  if (props.notes) {
    return <ReactMarkdown
      children={props.notes}
      remarkPlugins={[remarkGfm]}
    />;
  } else {
    return null;
  }
}

// I did this as a jpeg so it could go into the PDF
export function Logo() {
  return <StaticImage
    src="../../images/sierra_lighting-full_logo-black.jpg"
    alt="Sierra Lighting Logo"
    className="plan__logo"
  />
}

// build a pdf from an svg that comes from strapi
// except jsPDF cant use the svg directly it needs to convert it to a canvas
// and then convert the canvas to a base64 image
// and were in react so theres no documentation on this

const PDFBuilder = (props = {}) => {
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

    // scale to get better resolution
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
    // context.scale(1, 1);
    // this keeps rerendering and expanding each time so it doesnt work
    // context.scale(1.01, 1.01);

    // Reset current transformation matrix to the identity matrix
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform
    // context.setTransform(1, 0, 0, 1, 0, 0);

    // svg code converted to canvas code
    // https://canvg.js.org/
    // const v = Canvg.fromString(context, props.svv); // this needs to be better resolution

    // https://stackoverflow.com/questions/29081286/large-svg-to-png-in-fixed-resolution
    const v = Canvg.fromString(context, props.svv, {
      // ignoreDimensions: true, // no idea what this does
      // scaleWidth: 792, // original for 2410-nehalem-dr
      // scaleWidth: 1000, // guess and check
      // scaleWidth: 7000, // guess and check
      // scaleHeight: 612, // original for 2410-nehalem-dr
      // scaleHeight: 1000, // guess and check
      // scaleHeight: 9700, // guess and check
      // i think this is scaling too late and its going to come out fuzzy
    });
    // console.log(v);
    v.start(); // this needs documenting because its doing a lot

    // base64 encode the canvas image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    const dataURL = canvas.current.toDataURL();
    setCount(dataURL);
    // console.log(dataURL);

    // create the pdf
    const doc = new jsPDF('p', 'in', 'letter');
    // text, offset x, offset y
    doc.text(props.slug, 0.5, 1);
    // I need to take these as props
    // if I make all SVG based on the letter size that would be great
    // add a prop for tall or wide images?

    // imageData, format, x, y, width, height
    doc.addImage(dataURL, 'png', 0.5, 2, 7.5, 8);
    // doc.save(props.slug); // ! creates a file which is turned off for testing
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

      <section>
        <p>Who built these plans</p>
        <ul>
          {props.teams.map((team, index) => (
            <li key={index}>{team.name}</li>
          ))}
        </ul>
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

const PlanView = ({ plan }) => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Sierra Plans</Link>
        </h1>
      </header>
      <main>
        <PDFBuilder
          svv={plan.svg}
          slug={plan.slug}
          name={plan.name}
          address={plan.address}
          area={plan.area.name}
          teams={plan.teams}
          notes={plan.notes.data.notes}
          createdAt={plan.createdAt}
          updatedAt={plan.updatedAt}
        />
      </main>
    </>
  );
};

export default PlanView;
