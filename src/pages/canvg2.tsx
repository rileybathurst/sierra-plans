// https://canvg.js.org/
// so this gets back very quickly to needing useEffect so im going back to canvas8

import React, { useRef, useEffect } from "react";
import type { HeadFC } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import { jsPDF } from "jspdf";
import { Canvg } from 'canvg';

/* function MyCanvas() {
  const ctx;
  const v = Canvg.fromString(ctx, '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>');

}
 */
const CanvgPage = () => {
  return (
    <main>
      {/* <MyCanvas /> */}
    </main>
  )
}

export default CanvgPage

export const Head: HeadFC = () => <title>Canvg Page</title>













