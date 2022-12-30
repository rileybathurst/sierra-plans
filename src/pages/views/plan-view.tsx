import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";

import PDFBuilder from "../../components/pdf-builder";
// build a pdf from an svg that comes from strapi
// except jsPDF cant use the svg directly it needs to convert it to a canvas
// and then convert the canvas to a base64 image
// and were in react so theres no documentation on this

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
          area={plan?.area?.name}
          teams={plan.teams}
          notes={plan?.childStrapiPlanNotesTextnode?.notes}
          createdAt={plan.createdAt}
          updatedAt={plan.updatedAt}
          jobber={plan.jobber}
          jobbertakedown={plan.jobbertakedown}
        />
      </main>
    </>
  );
};

export default PlanView;
