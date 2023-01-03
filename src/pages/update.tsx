// what if i try with did update
// https://reactjs.org/docs/react-component.html#componentdidupdate

import React, { useRef, useEffect, useState } from "react";
import { jsPDF } from "jspdf";

class Welcome extends React.Component {
  componentDidUpdate() {
    const doc = new jsPDF('p', 'in', 'letter');

    let sta = this.props.stated;
    doc.text(sta, 0.5, 3);

    let filename = 'hey';
    doc.save(filename);
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
      </>
    );
  }
}

const ClassFunctionPage = () => {

  const [stateText, setStateText] = useState('start');
  useEffect(() => {
    setStateText('effected');
  });

  return (
    <>
      <Welcome
        stated={stateText}
      />
    </>
  );
}

export default ClassFunctionPage
