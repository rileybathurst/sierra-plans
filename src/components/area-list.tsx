import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// I started messing with a whole pulling a couple of lists but it was never clean and nice so just leave it for now
function AnyPlans(props) {

  if (props.plans.length > 0) {
    return (
      <Link to={props.area.slug}>
        {props.area.name}
        &nbsp;- {props.plans.length} Plans
      </Link>
    )
  }

  return (
    <span className="no-plans">
      {props.area.name}
    </span>
  );
}

function OnlyPlans(props) {

  const hasPlans = [];
  const noPlans = new Set();

  props.plans.map((plan: any) => {
    // console.log(plan.plans.length);
    if (plan.plans.length > 0) {
      // console.log(plan);
      // hasPlans['name'] = plan.name; // only keeps the last one
      hasPlans.push([plan.name, plan.slug, plan.id, plan.plans.length]);
    } else {
      noPlans.add(plan.name);
    }
  });

  return (
    <>
      <h3>Areas with Plans - {hasPlans.length}</h3>
      <ul className="areas-list">
        {Array.from(hasPlans).map((plan: any) => (
          <li key={plan[2]}>
            {/* // TODO: this would be cool to be a slide animation not a link */}
            <Link to={`/areas/${plan[1]}`} className="button">
              {plan[0]} - {plan[3]}
            </Link>
          </li>
        ))}
      </ul>
      <h3>Areas without Plans - {noPlans.size}</h3>
      <ul className="areas-list">
        {Array.from(noPlans).map((plan: any) => (
          <li>{plan}</li>
        ))}
      </ul>
    </>
  );
}


function AreaList() {

  const { allStrapiArea } = useStaticQuery(graphql`
    query {
      allStrapiArea {
        nodes {
          id
          name
          slug

          plans {
            id
            name
            slug
          }
        }
      }
    }
  `);

  return (
    <>
      <h2>Areas</h2>
      <p>{allStrapiArea.nodes.length} Areas</p>

      <OnlyPlans plans={allStrapiArea.nodes} />
    </>
  );
}

export default AreaList