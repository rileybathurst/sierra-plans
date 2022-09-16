import * as React from "react";

const PropertyView = ({ property }) => {
  return (
    <>
      <h1>{property.slug}</h1>
      <p>{property.svg}</p>
    </>
  );
};

export default PropertyView;
