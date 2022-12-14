import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo";

function Header() {
  return (
    <header>
      <Logo />
      <h1>
        <Link to="/">Plans</Link>
      </h1>

      <nav>
        <ul>
          <li key="area"><Link to="/area">Area</Link></li>
          <li key="takedownday"><Link to="/takedownday">Takedown Day</Link></li>
          <li key="guides"><Link to="/guides">Guides</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header