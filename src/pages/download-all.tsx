import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import { jsPDF } from "jspdf";

/* function Console(props) {
  console.log(props.data);
  return null;
} */

function PDF(props) {
  const doc = new jsPDF();

  doc.text(props.name, 10, 10);

  // by running this over the loop this downloads everything everytime
  // which is not really what I want and build doesnt do this as this has to run through the browser
  // all though having a download all page is the point and then just build singles
  // doc.save(props.name);

  return null;
}

const IndexPage = () => {
  return (
    <main>
      Hey
      <StaticQuery
        query={query}
        render={data => (
          <>
            <ul>
              {data.allStrapiProperty?.edges?.map(property => (
                <li key={property.node.id}>
                  <h3>{property.node.address}</h3>
                  <PDF name={property.node.address} />
                </li>
              ))}
            </ul>
          </>
        )}
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const query = graphql`
query DownloadAllQuery {
  allStrapiProperty {
    edges {
      node {
        id
        address
        svg
      }
    }
  }
}
`