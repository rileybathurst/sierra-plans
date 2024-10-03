import * as React from "react";
import { Link } from "gatsby";
import type { cardTypes } from "../types/card-types";

function Card({ slug, name, address, jobber, jobbertakedown }: cardTypes) {

  return (
    <Link
      to={`/p/${slug}`}
      className="card card__plan"
    >
      <section className="name">
        <h3>{name}</h3>
        <p className="supra">Name</p>
      </section>
      <section className="address">
        {address}
        <p className="supra">Address</p>
      </section>
      <section className="jobber">
        {jobber}
        <p className="supra">Jobber</p>
      </section>
      <section className="jobbertakedown">
        {jobbertakedown}
        <p className="supra">Jobber Takedown</p>
      </section>
    </Link>
  );
}

export default Card