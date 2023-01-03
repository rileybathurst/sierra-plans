import * as React from "react";

import { Link } from "gatsby";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Sierra Plans</Link>
      </h1>

      <nav>
        <ul>
          <li key="area"><Link to="/area">Area</Link></li>
          <li key="takedownday"><Link to="/takedownday">takedownday</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header