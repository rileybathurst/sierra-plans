import React, { useRef, useEffect, useState } from "react";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import { Canvg } from 'canvg';
import Header from "../../components/header";
import Footer from "../../components/footer";
import PDFBuild from "../../components/pdf-build";
import type { PlanTypes } from "../../types/plan-types";

export const query = graphql`
  query PlanQuery($slug: String!) {
    strapiPlan(slug: { eq: $slug }) {
      id
      name
      address
      zip
      areas {
        name
        state
      }
      slug
      svg

      notes {
        data {
          notes
        }
      }

      jobber
      jobbertakedown

      timerHours
      timerFallback
      
      teams {
        name
      }
      createdAt(formatString: "MMMM YYYY")
      updatedAt(formatString: "MMMM YYYY")

      takedownFlexOrder
      takedownday {
        date(formatString: "DD MMM YY")
        crew
      }
    }
  }
`

const PlanPage = ({ data }: { data: { strapiPlan: PlanTypes } }) => {

  // console.log(data.strapiPlan)

  const [dataState, setDataState] = useState(' ');

  // do not name this it breaks the build
  const canvas = useRef<HTMLCanvasElement>(null);

  if (data.strapiPlan.svg) {

    useEffect(() => {

      // grab the canvas and edit it with the useeffect to only do it once its drawn
      const ctx = canvas.current?.getContext("2d");
      if (!ctx) return;
      const v = Canvg.fromString(ctx, data.strapiPlan.svg);
      v.start();

      // base64 encode the canvas image
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
      const dataURL = canvas.current?.toDataURL() || '';
      setDataState(dataURL);
    });
  }

  useEffect(() => {
    PDFBuild(data.strapiPlan);
  }, [data.strapiPlan]);



  return (
    <>
      <Header />
      <main>

        {/* // * put a blank canvas here */}
        <canvas
          ref={canvas}
          width="2550" height="2550"
        />

        <h1>{data.strapiPlan.name}</h1>

        <address className="capitalize">
          <span className="kilimanjaro">{data.strapiPlan.address}</span><br />
          {data.strapiPlan.areas[0]?.name}<br />
          {data.strapiPlan.areas[0]?.state}
        </address>

        <hr />

        <div className="deck">
          <p className="plan-detail">
            <span className="eyebrow">Jobber install</span>
            <span className="supra">{data.strapiPlan.jobber ? data.strapiPlan.jobber : '<span className="error">Missing Jobber</span>'}</span>
          </p>
          <p className="plan-detail">
            <span className="eyebrow">Jobber takedown</span>
            <span className="supra">{data.strapiPlan.jobbertakedown ? data.strapiPlan.jobbertakedown : '<span className="error">Missing Jobber Takedown</span>'}</span>
          </p>
        </div>

        <hr />

        {data.strapiPlan.timerHours ?
          <p className="plan-detail">
            <span className="eyebrow">Timer</span>
            <span className="supra">{data.strapiPlan.timerHours} Hours</span>
          </p>
          : null}

        {data.strapiPlan.timerFallback ?
          <p className="plan-detail">
            <span className="eyebrow">Timer</span>
            <span className="supra">{data.strapiPlan.timerFallback}</span>
          </p>
          : null}

        {data.strapiPlan.notes.data.notes ?
          <ReactMarkdown>
            {data.strapiPlan.notes.data.notes}
          </ReactMarkdown>
          : <>No Notes</>}

        <img src={dataState} alt="the svg as an img" className="measure" />

        <div className="deck">
          <p className="plan-detail">
            <span className="eyebrow">Created at</span>
            <span className="supra">{data.strapiPlan.createdAt}</span>
          </p>
          <p className="plan-detail">
            <span className="eyebrow">Updated at</span>
            <span className="supra"> {data.strapiPlan.updatedAt}</span>
          </p>
        </div>

        {/* // * currently not in use
            <hr />
      <section>
        Takedown

        <p>crew - {data.strapiPlan.takedownday?.crew}</p>
        <p>date - {data.strapiPlan.takedownday?.date}</p>
        <p>job for the day #{data.strapiPlan.takedownFlexOrder}</p>

      </section> */}
      </main>
      <Footer />
    </>
  );
};

export default PlanPage;
