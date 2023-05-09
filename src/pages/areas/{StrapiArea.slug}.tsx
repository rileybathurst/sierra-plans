// ! theres something wrong here

import * as React from "react"
import { graphql } from "gatsby"
import AreaView from "../views/area-view"

/* export const query = graphql`
  query AreaQuery($slug: String) {
    strapiArea(slug: { eq: $slug }) {
      id
      name

      plans {
        id
        slug
        name
        address
        areas {
          name
          state
        }
        jobber
        jobbertakedown
        takedownday {
          id
        }
      }
    }
  }
`

const AreaPage = ({ data }) => {
  const area = data?.strapiArea;
  return (
    <AreaView
      area={area}
    />
  );
};

export default AreaPage; */
