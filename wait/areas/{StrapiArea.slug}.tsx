import * as React from "react"
import { graphql } from "gatsby"
import AreaView from "../../src/pages/views/area-view"

export const query = graphql`
  query AreaQuery($slug: String!) {
    strapiArea(slug: { eq: $slug }) {
      id
      name
    }
  }
`

// ! Im not getting plans as an option in http://localhost:8000/___graphql
// thats maybe why I went to the template that I never finished?

const AreaPage = ({ data }) => {
  const area = data.strapiArea;
  return (
    <AreaView
      area={area}
    />
  );
};

export default AreaPage;
