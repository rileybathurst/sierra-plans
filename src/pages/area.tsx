import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import Header from "../components/header";

function Jobber(props) {
  if (props.jobber) {
    return (
      <>{props.jobber} -&nbsp;</>
    )
  }
  else return null;
}

const AreaPage = () => {
  return (
    <>
      <Header />
      <main>
        <StaticQuery
          query={query}
          render={data => (
            <div>

              {/* // TODO remove children if they are other places
              this might be slightly complex as its not all children
              or it might not be needed as this might just be a view and download all
              */}

              <h2><Link to="/areas/alpine">Alpine</Link></h2>
              <ul>
                {data.alpine?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/carson">carson</Link></h2>
              <ul>
                {data.carson?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/damone">damone</Link></h2>
              <ul>
                {data.damone?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/gelena">gelena</Link></h2>
              <ul>
                {data.gelena?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/grays">grays</Link></h2>
              <ul>
                {data.grays?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/homewood">homewood</Link></h2>
              <ul>
                {data.homewood?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>


              <h2><Link to="/areas/incline">incline</Link></h2>
              <ul>
                {data.incline?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/kings">kings</Link></h2>
              <ul>
                {data.kings?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/lahontan">lahontan</Link></h2>
              <ul>
                {data.lahontan?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/martis">martis</Link></h2>
              <ul>
                {data.martis?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/minden">minden</Link></h2>
              <ul>
                {data.minden?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/montreux">montreux</Link></h2>
              <ul>
                {data.montreux?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/newwashoecity">newwashoecity</Link></h2>
              <ul>
                {data.newwashoecity?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/northlake">northlake</Link></h2>
              <ul>
                {data.northlake?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/olympic">olympic</Link></h2>
              <ul>
                {data.olympic?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/reno">reno</Link></h2>
              <ul>
                {data.reno?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/somersett">somersett</Link></h2>
              <ul>
                {data.somersett?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/southlake">southlake</Link></h2>
              <ul>
                {data.southlake?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/spanish">spanish</Link></h2>
              <ul>
                {data.spanish?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>


              <h2><Link to="/areas/sparks">sparks</Link></h2>
              <ul>
                {data.sparks?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/stateline">stateline</Link></h2>
              <ul>
                {data.stateline?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/tahoma">tahoma</Link></h2>
              <ul>
                {data.tahoma?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/truckee">truckee</Link></h2>
              <ul>
                {data.truckee?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2><Link to="/areas/verdi">verdi</Link></h2>
              <ul>
                {data.verdi?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>


            </div>
          )}
        />

      </main>
      <footer>
        Sierra Lighting
      </footer>
    </>
  )
}

export default AreaPage

export const Head: HeadFC = () => <title>Home Page</title>

const query = graphql`
query AreaQuery {
  alpine: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"alpine"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  carson: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"carson"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  caughlin: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"caughlin"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  damone: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"damone"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  gelena: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"gelena"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  grays: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"grays"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  homewood: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"homewood"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  incline: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"incline"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  kings: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"kings"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  lahontan: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"lahontan"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  martis: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"martis"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  minden: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"minden"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  montreux: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"montreux"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  newwashoecity: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"newwashoecity"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  northlake: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"northlake"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  olympic: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"olympic"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  reno: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"reno"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  somersett: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"somersett"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  southlake: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"southlake"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  spanish: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"spanish"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  sparks: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"sparks"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  stateline: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"stateline"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  tahoma: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"tahoma"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  truckee: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"truckee"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  verdi: allStrapiPlan(filter: {areas: {elemMatch: {slug: {eq:"verdi"}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }
  
  unclassified: allStrapiPlan(filter: {areas: {elemMatch: {slug: {nin: ["alpine", "carson", "cauglin", "damone", "gelena", "grays", "homewood", "incline", "kings", "lahontan", "martis", "minden", "montreux", "newwashoecity", "northlake", "olympic", "reno", "somersett", "southlake", "spanish", "sparks", "stateline", "tahoma", "truckee", "verdi"]}}}}) {
    edges {
      node {
        id
        address
        slug
        name
        jobber
      }
    }
  }

  
}
`