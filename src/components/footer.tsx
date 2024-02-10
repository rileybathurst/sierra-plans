import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo";

// import Search7 from "./search7";

function Footer() {
  return (
    <footer>

      <hr className="pelican" />

      <div className="footer-copyright">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </footer>
  );
}

export default Footer