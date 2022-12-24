import * as React from "react"
import { Link } from "gatsby";

const AreaView = ({ area }) => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Sierra Plans</Link>
        </h1>
      </header>
      <main>
        {area.name}
      </main>
    </>
  );
};

export default AreaView;
