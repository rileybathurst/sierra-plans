import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo";

function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">
        <Logo />
      </Link>
      <h1>
        <Link to="/">Plans</Link>
      </h1>

      <nav>
        <ul>
          <li key="area"><Link to="/area" className="button">Area</Link></li>
          <li key="takedownday"><Link to="/takedownday" className="button">Takedown Day</Link></li>
          <li key="guides"><Link to="/guides" className="button">Guides</Link></li>
          <li key="search"><Link to="/search8" className="button">Search</Link></li>
        </ul>
      </nav>

      <hr />
    </header>
  );
}

export default Header