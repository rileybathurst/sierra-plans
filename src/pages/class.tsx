import * as React from "react"

import { Canvg } from 'canvg';
import { jsPDF } from "jspdf";

// this is essentially a function
class Welcome extends React.Component {

  // I think / hope this solved the problem of downloading each PDF twice
  // I need to check this on an actual build
  componentDidMount() {
    const doc = new jsPDF('p', 'in', 'letter');
    doc.text('text', 0.5, 1);
    let filename = "hey";
    doc.save(filename);
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state}.</h2>
      </div>
    );
  }
}

const ClassPage = () => {
  return (
    <>
      class
      <Welcome />
    </>
  )
}

export default ClassPage
