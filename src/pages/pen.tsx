import * as React from "react";
import type { HeadFC } from "gatsby";

// https://codepen.io/JFernandoG/pen/NOdxzv?editors=1111

function Pen(props) {

  var svg = props.svg;

  svg = svg.replace(/\r?\n|\r/g, '').trim();

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  // context.clearRect(0, 0, canvas.width, canvas.height);
  // canvg(canvas, svg);

  // var imgData = canvas.toDataURL('image/png');

  return (
    <>
      {/* {imgData} */}
      {/* test */}
      {context}
    </>
  );
}

const PenPage = () => {
  return (
    <main>
      <h1>Pen</h1>

      <Pen svg='<div id="svg-container"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="400px" viewBox="0 0 200 400" enable-background="new 0 0 250 400" xml:space="preserve"><rect x="0" y="0" fill="#1AAAAA" width="250" height="400"/><text transform="matrix(1 0 0 1 15 30)"><tspan x="0" y="15" fill="#FFFFFF" font-size="30">Hey</tspan></text></svg>' />
    </main>
  )
}

export default PenPage

export const Head: HeadFC = () => <title>Pen Page</title>
