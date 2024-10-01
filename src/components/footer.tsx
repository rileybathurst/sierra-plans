import React, { useState } from "react";
import { Link } from "gatsby";

import Logo from "../images/logo";

// import Search7 from "./search7";


function Slug() {
  // TODO: make this pretty

  const [slug, setSlug] = useState('');

  function slugger(e: React.ChangeEvent<HTMLInputElement>) {
    setSlug(e.target.value);
    return null;
  }

  return (
    <div className="slug">
      <form>

        <label htmlFor="slug">Slug&nbsp;</label>
        <input type="text" id="slug" name="slug" onChange={slugger} />

        <Link
          to={`/p/${slug}`}
          className="button"
        >plan/{slug}</Link>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>

      <hr className="pelican" />


      <Slug />

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