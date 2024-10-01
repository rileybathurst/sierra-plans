import * as React from "react";

import { Link } from "gatsby";
import StateAbbreviation from "./state-abbreviation";

function Takedownday(props: {
  takedownday: any
}) {
  if (props.takedownday) {

    return (
      <section className="card__takedownday">
        <p>Takedown Day</p>
        <p>Takedown Person</p>
        <p>Takedown Order</p>
      </section>
    );
  }

  return null;
}

function Card(plan: {
  key: string;
  slug: string;
  name: string;
  address: string;
  areas: string[] | {
    name: string;
    state: string;
  }[];
  jobber: number;
  jobbertakedown: number;
  takedownday: any; // this is an array of data so I need to learn on this
}) {

  console.log('🦖');
  console.log(plan);
  // console.log(plan.plan.name);

  return (
    <li key={plan.key} className="card">
      <h2>
        <Link to={`/p/${plan.slug}`}>
          {plan.name}

          {/* // ! this fixes the search and breaks the other things */}
          {/* naming the fuction plan is kinda the props */}

          {/* {plan?.plan?.name} */}
        </Link>
      </h2>
      {/* <p>{plan.address}, {plan?.areas[0].name}, <StateAbbreviation state={plan.areas[0].state} /></p> */}
      <section className="card__jobs">
        <hgroup>
          <h3>Jobber</h3>
          <h4>{plan.jobber}</h4>
        </hgroup>

        <hgroup>
          <h3>Jobber Takedown</h3>
          <h4>{plan.jobbertakedown}</h4>
        </hgroup>
      </section>

      <Takedownday
        takedownday={plan.takedownday}
      />

    </li >
  );
}

export default Card