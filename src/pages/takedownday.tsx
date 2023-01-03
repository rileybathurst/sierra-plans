import * as React from "react";
import { Link } from "gatsby";
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

const TakedownDayPage = () => {
  return (
    <>
      <Header />
      <main>
        <StaticQuery
          query={query}
          render={data => (
            <ul>
              {data.allStrapiTakedownday?.edges?.map(day => (
                <li key={day.node.id}>
                  <Link to={`/takedownday/${day.node.id}`}>
                    {day.node.date}-{day.node.crew}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        />
      </main>
    </>
  )
}

export default TakedownDayPage

const query = graphql`
query TakedownDayQuery {
  allStrapiTakedownday {
    edges {
      node {
        id
        date
        crew
        plans {
          name
        }
      }
    }
  }
}
`