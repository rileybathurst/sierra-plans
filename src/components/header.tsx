import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo";

function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">
        <Logo />
      </Link>

      <nav>
        <ul>
          <li key="guides"><Link to="/guides" className="button">Guides</Link></li>
          <li key="search"><Link to="/search9" className="button">Search</Link></li>
        </ul>
      </nav>

      <hr />
    </header>
  );
}

export default Header