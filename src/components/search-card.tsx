import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import StateAbbreviation from "./state-abbreviation";

function Places(props) {

  return null;
}

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

  else return null;
}

function AreaPlan(props: {
  name: string;
}) {

  <StaticQuery
    query={query}
    render={data => (
      <AreaPlan
        areas={data.allStrapiArea.nodes}
      />
    )}
  />


  // if plan is in this list?
  // would that mean I need to query that list?
  // I could do by something more unique but what if its not filled out?


  if (props.name ==) {
    return (
      <>Area</>
    );
  } else {
    return (
      <>Plan</>
    );
  }
}

function SearchCard(plan: {
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
}
) {
  return (
    <li key={plan.key} className="card">

      <AreaPlan
        name={plan.name}
      />

      <h2>
        <Link to={`/plan/${plan.slug}`}>{plan.name}</Link>
      </h2>

      <address>
        {plan.address},

        {/* due to the way Im grabbing specific data from the API this needs a function to handle it */}
        <Places area={plan.areas} />
      </address>

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

export default SearchCard

const query = graphql`
query SearchCardQuery {
  allStrapiArea {
    nodes {
      name
    }
  }
}`