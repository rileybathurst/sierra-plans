import * as React from "react"

import { jsPDF } from "jspdf";

const MultiPagePlan = () => {

  const fruits = ["banana", "apple"];

  fruits.forEach(fruit => {
    const doc = new jsPDF('p', 'in', 'letter', true);
    console.log('fruit', fruit);
    doc.text(fruit, 0.5, 1);
    doc.save(fruit);
  });

  return (
    <>
      hey
    </>
  );
};

export default MultiPagePlan;
