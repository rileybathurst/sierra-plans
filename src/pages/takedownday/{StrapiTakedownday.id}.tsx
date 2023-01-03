import * as React from "react"
import { graphql } from "gatsby"

import { jsPDF } from "jspdf";

export const query = graphql`
  query TDQuery($id: String!) {
    strapiTakedownday(id: { eq: $id }) {
      id
      date
      crew
      plans {
        name
      }
    }
  }
`

function Console(props) {

  console.log('props', props.plans)

  props.plans.forEach(plan => {
    const doc = new jsPDF('p', 'in', 'letter', true);
    doc.text(plan.name, 0.5, 1);
    doc.text(props.date, 0.5, 2);
    doc.save(plan.name);
  });

  return null;
}

const TDPage = ({ data }) => {
  const td = data.strapiTakedownday;

  return (
    <>
      <h1>{td.date}</h1>

      <ul>
        {td.plans.map(plan => (
          <li key={plan.name}>
            {plan.name}
          </li>
        ))}
      </ul>

      <Console
        plans={td.plans}
        date={td.date}
      />
    </>
  );
};

export default TDPage;
