import * as React from "react"
import { graphql } from "gatsby"
import AreaView from "../views/area-view"

export const query = graphql`
  query AreaQuery($slug: String!) {
    strapiArea(slug: { eq: $slug }) {
      id
      name

      plans {
        id
        name
        slug
      }
    }
  }
`

const AreaPage = ({ data }) => {
  const area = data.strapiArea;
  return (
    <AreaView
      area={area}
    />
  );
};

export default AreaPage;
