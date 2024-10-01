import React, { useRef, useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';
import Markdown from "./markdown";

function Jobber({ jobber }: { jobber: string }) {
  if (!jobber) {
    return (
      <span className="error">Missing Jobber</span>
    );
  }
  return (
    <>{jobber}</>
  );
}

// TODO: Rename
class Welcome extends React.Component {

  componentDidUpdate() {

    const doc = new jsPDF('p', 'in', 'letter', true);

    // console.log(doc.getFontList());
    // this doesnt adjust the image thats done in the SVG
    doc.setFont('helvetica', 'normal');

    doc.setLineWidth(0.01);

    const name = this.props.plan.name;
    doc.text(name, 0.5, 0.75);

    doc.setFontSize(12);

    let state: string;
    if (this.props.plan?.areas[0]?.state === 'california') {
      state = 'CA';
    } else if (this.props.plan?.areas[0]?.state === 'nevada') {
      state = 'NV';
    } else {
      state = 'undefined';
    }

    const add = `${this.props.plan.address}, ${this.props.plan?.areas[0]?.name ? this.props.plan?.areas[0]?.name : ''}, ${this.props.plan?.areas[0]?.state ? state : ''}. ${this.props.plan.zip ? this.props.plan.zip : ''}`;
    doc.text(add, 0.5, 1);

    doc.setFontSize(9);

    if (this.props.plan?.jobber) {
      doc.rect(6.75, 0.5, 1.25, 1.25);
      doc.text('Jobber', 6.85, 0.75);
      const j = `${this.props.plan?.jobber}`;
      doc.text(j, 6.85, 1);
      doc.text('Jobber Takedown', 6.85, 1.25);
      const jt = `${this.props.plan?.jobbertakedown}`;
      doc.text(jt, 6.85, 1.5);
    }

    const takeDate = '';
    if (this.props.plan?.takedownday?.date) {
      const takeDate = `-${this.props.plan?.takedownday?.date}`;
    }

    const takeCrew = '';
    if (this.props.plan?.takedownday?.crew) {
      const takeCrew = `-${this.props.plan?.takedownday?.crew}`;
    }

    const takeOrder = '';
    if (this.props.plan?.takedownFlexOrder) {
      const takeOrder = `-${this.props.plan?.takedownFlexOrder}`;
    }

    // TODO: name but with regex to remove spaces and special characters
    // TODO: regex on this to adapt it as I need it both ways

    /*     if (this.props.plan?.jobbertakedown) {
          doc.rect(6, 0.5, 1.25, 1.25);
          doc.text('Takedown', 6.15, 1.25);
          doc.text(takeCrew, 6.15, 1.5);
          doc.text(takeDate, 6.15, 1.75);
          doc.text(takeOrder, 6.15, 2);
        } */

    if (this.props?.plan?.notes.data.notes) {
      const splitNote = doc.splitTextToSize(this.props.plan?.notes.data.notes, 7);
      doc.text(splitNote, 0.5, 1.5, { maxWidth: 6 });
    }

    doc.addImage(this.props.data, 'png', 0.5, 2, 7.5, 8);

    if (this.props.plan.createdAt !== this.props.plan.updatedAt) {
      const dates = `Created: ${this.props.plan.createdAt} Updated: ${this.props.plan.updatedAt}`;
      doc.text(dates, 0.5, 9.5);
    } else {
      doc.text(`Created: ${this.props.plan.updatedAt}`, 0.5, 9.5);
    }

    doc.line(0.5, 9.6, 8, 9.6);

    const logo = new Image();
    logo.src = "https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-full_logo-black-fs8.png";
    doc.addImage(logo, 'png', 0.5, 9.7, 1, 0.51);

    // TODO: new name with variables if it has them and needs them
    // jobber install
    // name
    // slug
    // takedown date
    // takedown crew
    // takedown order
    const filename = `${this.props.plan?.jobber}-${this.props.plan?.jobbertakedown}-${this.props.plan?.name}-${this.props.plan?.slug}`;

    doc.save(filename); // * turn off for developing
  }

  render() {
    return null;
  }
}

const UpdateBuild = (props = { plan }) => {

  const [dataState, setDataState] = useState(' ');

  // do not name this it breaks the build
  const canvas = useRef(null);

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

      <address className="capitalize">
        <span className="kilimanjaro">{props.plan.address}</span><br />
        {props.plan?.areas[0]?.name}<br />
        {props.plan?.areas[0]?.state}
      </address>

      <hr />

      <div className="deck">
        <p className="plan-detail">
          <span className="eyebrow">Jobber install</span>
          <span className="supra"><Jobber jobber={props.plan?.jobber} /></span>
        </p>
        <p className="plan-detail">
          <span className="eyebrow">Jobber takedown</span>
          <span className="supra"><Jobber jobber={props.plan?.jobbertakedown} /></span>
        </p>
      </div>

      <hr />

      <Markdown notes={props.plan?.notes.data.notes} />

      <img src={dataState} alt="the svg as an img" className="measure" />

      <div className="deck">
        <p className="plan-detail">
          <span className="eyebrow">Created at</span>
          <span className="supra">{props.plan.createdAt}</span>
        </p>
        <p className="plan-detail">
          <span className="eyebrow">Updated at</span>
          <span className="supra"> {props.plan.createdAt}</span>
        </p>
      </div>

      <hr />

      <section>
        Takedown

        <p>crew - {props.plan?.takedownday?.crew}</p>
        <p>date - {props.plan?.takedownday?.date}</p>
        <p>job for the day #{props.plan.takedownFlexOrder}</p>

      </section>
    </main>
  );
}

export default UpdateBuild
