import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

function Console(props: any) {
  console.log(props.log);
  return null;
}


// ! this is where I'm at when I have to leave
function AnyPlans(props) {
  if (props.plans.length > 0) {
    return (
      <>
        {
          props.plans.map((plan: any) => (
            <>
              {plan.name}
              {/* <li key={plans.id} >
              <Console log={plans.area} />
              <Link to={`/areas/${plans.area.slug}`}>
                {plans.area.name}
                &nbsp;-&nbsp;{plans.area.plans.length} Plans
              </Link>
            </li> */}
            </>
          ))
        }
      </>
    )
  }
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
      }
        }
      }
    }
  `);

  return (
    <>
      <h2>Areas</h2>
      <p>{allStrapiArea.nodes.length} Areas</p>
      <ul className="areas-list">
        {allStrapiArea.nodes.map((area: any) => (
          <>
            Working on this
            <AnyPlans plans={area.plans} />
          </>
        ))}
      </ul >
    </>
  );
}

export default AreaList