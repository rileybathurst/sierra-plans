import * as React from "react";
import { graphql } from "gatsby";

const AreaView = ({ data }) => {
  return (
    <>
      {data.area.name}
    </>
  );
};

export default AreaView;

export const query = graphql`
  query AreaTemplate(
    $slug: String!,
  ) {
    area: strapiArea(slug: {eq: $slug}) {
    id
    name
    }
  }
`;
