// this is download all

import React, { useRef, useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

const MyCanvas = (props = {}) => {
  const canvas1 = useRef(null);
  const [count, setCount] = useState('hey');

  useEffect(() => {
    const context = canvas1.current.getContext("2d");
    const v = Canvg.fromString(context, props.svv);
    v.start(); // this needs documenting because its doing a lot

    const dataURL = canvas1.current.toDataURL();
    setCount(dataURL);

    const doc = new jsPDF();
    doc.text('now', 10, 10);
    doc.addImage(dataURL, 'png', 10, 30, 150, 76); // these 
    doc.save('again');
  });

  return (
    <>
      {/* {count} */}
      <canvas ref={canvas1} />{/* this is built but doesnt show */}
      <img src={count} alt="the svg but its an image" />
    </>
  );
};

const DownloadAllPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiProperty?.edges?.map(property => (
            <li key={property.node.id}>
              <h3>{property.node.address}</h3>
              <MyCanvas svv={property.node.svg} />
              <p>{property.node.svg}</p>
              {/* <PDF name={property.node.address} /> */}
            </li>
          ))}
        </ul>
      )}
    />
  )
}

export default DownloadAllPage

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
