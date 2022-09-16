import * as React from "react"
import { graphql } from "gatsby"
import PropertyView from "../views/property-view"

export const query = graphql`
  query PropertyQuery($slug: String!) {
    strapiProperty(slug: { eq: $slug }) {
      id
      slug
      svg
    }
  }
`

const PropertyPage = ({ data }) => {
  const property = data.strapiProperty;
  return (
    <PropertyView
      property={property}
    />
  );
};

export default PropertyPage;
