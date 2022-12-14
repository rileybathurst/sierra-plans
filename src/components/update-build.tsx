// this works but needs to be finished

import React, { useRef, useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';
import Markdown from "./markdown";

import Header from "./header";
import Footer from "./footer";

class Welcome extends React.Component {

  componentDidUpdate() {

    const doc = new jsPDF('p', 'in', 'letter', true);

    doc.setLineWidth(0.01);

    let name = this.props.plan.name;
    doc.text(name, 0.5, 1);

    doc.setFontSize(12);
    // this is hard coded to the first area which I dont think will be a problem
    // TODO: area need a better fallback than undefined
    let add = `${this.props.plan.address}, ${this.props.plan?.areas[0]?.name}${this.props.plan?.areas[0]?.state}`;
    doc.text(add, 0.5, 1.25);

    doc.setFontSize(9);

    var jobber = '';
    doc.rect(4, 1, 1.25, 1.25);
    if (this.props.plan?.jobber) {
      doc.text('Jobber', 4.15, 1.5);
      var j = `${this.props.plan?.jobber}`;
      doc.text(j, 4.15, 1.75);
    }
    if (this.props.plan?.jobbertakedown) {
      doc.text('Jobber Takedown', 4.15, 2);
      var jt = `${this.props.plan?.jobbertakedown}`;
      doc.text(jt, 4.15, 2.25);
    }

    if (this.props?.plan?.childStrapiPlanNotesTextnode) {
      // console.log('🦖');
      var splitNote = doc.splitTextToSize(this.props.plan.childStrapiPlanNotesTextnode.notes, 7);
      doc.text(splitNote, 0.5, 1.5);
    }

    doc.addImage(this.props.data, 'png', 0.5, 2, 7.5, 8);

    if (this.props.plan.createdAt !== this.props.plan.updatedAt) {
      let dates = `Created: ${this.props.plan.createdAt} Updated: ${this.props.plan.updatedAt}`;
      doc.text(dates, 0.5, 9);
    } else {
      doc.text(`Created: ${this.props.plan.updatedAt}`, 0.5, 9);
    }

    doc.line(0.5, 9.1, 8, 9.1);

    let logo = new Image();
    logo.src = "https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-full_logo-black-fs8.png";
    doc.addImage(logo, 'png', 0.5, 9.2, 1, 0.51);

    // TODO: name but with regex to remove spaces and special characters

    // TODO: regex on this to adapt it as I need it both ways
    var takeDate = '';
    if (this.props.plan?.takedownday?.date) {
      var takeDate = `-${this.props.plan?.takedownday?.date}`;
    }

    var takeCrew = '';
    if (this.props.plan?.takedownday?.crew) {
      var takeCrew = `-${this.props.plan?.takedownday?.crew}`;
    }

    var takeOrder = '';
    if (this.props.plan?.takedownFlexOrder) {
      var takeOrder = `-${this.props.plan?.takedownFlexOrder}`;
    }

    // TODO: Takedown top right
    doc.rect(6, 1, 1.25, 1.25);
    doc.text('Takedown', 6.15, 1.25);
    doc.text(takeCrew, 6.15, 1.5);
    doc.text(takeDate, 6.15, 1.75);
    doc.text(takeOrder, 6.15, 2);

    // TODO: new name with variables if it has them and needs them
    // jobber install
    // name
    // slug
    // takedown date
    // takedown crew
    // takedown order
    let filename = `${jobber}${this.props.plan?.name}${this.props.plan?.slug}${takeDate}${takeCrew}${takeOrder}`;

    doc.save(filename); // ! turn off for developing
  }

  render() {
    return null;
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
      <Header />
      <main>
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
        <h2 className="capitalize">{props.plan.address} {props.plan?.areas[0]?.name}&nbsp;{props.plan?.areas[0]?.state}</h2>
        <p>
          {/* // TODO: put a fail state in here */}
          Jobber install {props.plan?.jobber}<br />
          Jobber takedown {props.plan?.jobbertakedown}
        </p>

        <Markdown notes={props.plan?.childStrapiPlanNotesTextnode?.notes} />

        <img src={dataState} alt="the svg but its an image" className="measure" />

        <h4>Created at {props.plan.createdAt}</h4>
        <h4>Updated at {props.plan.createdAt}</h4>

        <hr />

        <section>
          Takedown

          <p>crew - {props.plan?.takedownday?.crew}</p>
          <p>date - {props.plan?.takedownday?.date}</p>
          <p>job for the day #{props.plan.takedownFlexOrder}</p>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default UpdateBuild
