import * as React from "react"
import { graphql } from "gatsby"

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

const TDPage = ({ data }) => {
  const td = data.strapiTakedownday;
  return (
    <>
      {/* <h1>{td.date}</h1> */}
      plans need the loop
    </>
  );
};

export default TDPage;
