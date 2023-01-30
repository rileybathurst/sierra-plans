import * as React from "react";
import { Link } from "gatsby";

function OtherCard(data: {
  key: string;
  slug: string;
  name: string;
}) {

  console.log(data);

  return (
    <li key={data.key} className="card card__other">
      <h2>{data.name}</h2>
      <h3>{data.data.name} - this is the double</h3>
      {/* <h3>{data} - this is the single</h3> */}
    </li >
  );
}

export default OtherCard
