import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

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
      <header>
        Sierra Plans
      </header>
      <main>
        <h2>Download a single set of plans</h2>
        <StaticQuery
          query={query}
          render={data => (
            <div>

              {/* // TODO remove children if they are other places
              this might be slightly complex as its not all children
              or it might not be needed as this might just be a view and download all
              */}

              <h2>Alpine</h2>
              <ul>
                {data.alpine?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    {/* // TODO turn this into a flex table */}
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>Carson</h2>
              <ul>
                {data.carson?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    {/* // TODO turn this into a flex table */}
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>Caughlin</h2>
              <ul>
                {data.carson?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    {/* // TODO turn this into a flex table */}
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>




              <h2>damone</h2>
              <ul>
                {data.damone?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>gelena</h2>
              <ul>
                {data.gelena?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>



              <h2>gelena</h2>
              <ul>
                {data.gelena?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>


              <h2>grays</h2>
              <ul>
                {data.grays?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>homewood</h2>
              <ul>
                {data.homewood?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>


              <h2>incline</h2>
              <ul>
                {data.incline?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>kings</h2>
              <ul>
                {data.kings?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>lahontan</h2>
              <ul>
                {data.lahontan?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>martis</h2>
              <ul>
                {data.martis?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>minden</h2>
              <ul>
                {data.minden?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>montreux</h2>
              <ul>
                {data.montreux?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>newwashoecity</h2>
              <ul>
                {data.newwashoecity?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>northlake</h2>
              <ul>
                {data.northlake?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>olympic</h2>
              <ul>
                {data.olympic?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>reno</h2>
              <ul>
                {data.reno?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>somersett</h2>
              <ul>
                {data.somersett?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>southlake</h2>
              <ul>
                {data.southlake?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>spanish</h2>
              <ul>
                {data.spanish?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>


              <h2>sparks</h2>
              <ul>
                {data.sparks?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>stateline</h2>
              <ul>
                {data.stateline?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>tahoma</h2>
              <ul>
                {data.tahoma?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>truckee</h2>
              <ul>
                {data.truckee?.edges?.map(plan => (
                  <li key={plan.node.id}>
                    <p><Link to={`/plan/${plan.node.slug}`}><Jobber jobber={plan.node.jobber} />{plan.node.name} - {plan.node.address}</Link></p>
                  </li>
                ))}
              </ul>

              <h2>verdi</h2>
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
  alpine: allStrapiPlan(filter: {area: {slug: {eq: "alpine"}}}) {
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
  
  carson: allStrapiPlan(filter: {area: {slug: {eq: "carson"}}}) {
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
  
  caughlin: allStrapiPlan(filter: {area: {slug: {eq: "caughlin"}}}) {
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

  damone: allStrapiPlan(filter: {area: {slug: {eq: "damone"}}}) {
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

  gelena: allStrapiPlan(filter: {area: {slug: {eq: "gelena"}}}) {
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

  grays: allStrapiPlan(filter: {area: {slug: {eq: "grays"}}}) {
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

  homewood: allStrapiPlan(filter: {area: {slug: {eq: "homewood"}}}) {
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

  incline: allStrapiPlan(filter: {area: {slug: {eq: "incline"}}}) {
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

  kings: allStrapiPlan(filter: {area: {slug: {eq: "kings"}}}) {
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

  lahontan: allStrapiPlan(filter: {area: {slug: {eq: "lahontan"}}}) {
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

  martis: allStrapiPlan(filter: {area: {slug: {eq: "martis"}}}) {
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

  minden: allStrapiPlan(filter: {area: {slug: {eq: "minden"}}}) {
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

  montreux: allStrapiPlan(filter: {area: {slug: {eq: "montreux"}}}) {
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

  newwashoecity: allStrapiPlan(filter: {area: {slug: {eq: "newwashoecity"}}}) {
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
  
  northlake: allStrapiPlan(filter: {area: {slug: {eq: "northlake"}}}) {
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

  olympic: allStrapiPlan(filter: {area: {slug: {eq: "olympic"}}}) {
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

  reno: allStrapiPlan(filter: {area: {slug: {eq: "reno"}}}) {
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

  somersett: allStrapiPlan(filter: {area: {slug: {eq: "somersett"}}}) {
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

  southlake: allStrapiPlan(filter: {area: {slug: {eq: "southlake"}}}) {
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
  
  spanish: allStrapiPlan(filter: {area: {slug: {eq: "spanish"}}}) {
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
  
  sparks: allStrapiPlan(filter: {area: {slug: {eq: "sparks"}}}) {
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
  
  stateline: allStrapiPlan(filter: {area: {slug: {eq: "stateline"}}}) {
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
  
  tahoma: allStrapiPlan(filter: {area: {slug: {eq: "tahoma"}}}) {
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
  
  truckee: allStrapiPlan(filter: {area: {slug: {eq: "truckee"}}}) {
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
  
  verdi: allStrapiPlan(filter: {area: {slug: {eq: "verdi"}}}) {
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
  
  unclassified: allStrapiPlan(filter: {area: {slug: {nin: ["alpine", "carson", "cauglin", "damone", "gelena", "grays", "homewood", "incline", "kings", "lahontan", "martis", "minden", "montreux", "newwashoecity", "northlake", "olympic", "reno", "somersett", "southlake", "spanish", "sparks", "stateline", "tahoma", "truckee", "verdi"]}}}) {
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