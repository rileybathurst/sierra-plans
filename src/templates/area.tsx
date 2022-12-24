import * as React from "react";
import { graphql } from "gatsby";

// ! I think this was something I didnt get to and now I dont need it

function Console(props) {
  console.log(props.data);
  return null;
}

const AreaView = ({ data }) => {
  return (
    <>
      {/* test */}
      {/* {data.area.slug} */}
      above<br />
      {data.slug}<br />
      <Console data={data} />
      below<br />
    </>
  );
};

export default AreaView;

export const query = graphql`
  query AreaTemplate(
    $slug: String!,
  ) {
    areas: strapiArea(slug: {eq: $slug}) {
    id
    name
    slug
    }
  }
`;
