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

  // addSvgAsImage(SVG-Data, x, y, width, height, alias, compression, rotation)
  doc.addSvgAsImage('<div><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#1AAAAA" /></svg></div>', 0, 0, 100, 100, 'test', 'NONE', 0)

  doc.text('after', 10, 30);

  console.log(doc);

  const hello = "world";

  // by running this over the loop this downloads everything everytime
  // which is not really what I want and build doesnt do this as this has to run through the browser
  // all though having a download all page is the point and then just build singles
  doc.save(props.name);

  return (
    <>
      {hello}
      // this is generate maybe it cant show so I need to go back to pdf.js
      {/* {doc} */}
    </>
  );
}

function Dino(props) {

  // const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 150, 100);

  const finished = <canvas id={canvas}></canvas>

  return (
    { finished }
  );
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
                  <p>{property.node.svg}</p>
                  <PDF name={property.node.address} />
                </li>
              ))}
            </ul>
          </>
        )}
      />

<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#1AAAAA" /></svg>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const query = graphql`
query IndexQuery {
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