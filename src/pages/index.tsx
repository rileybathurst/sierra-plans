import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const IndexPage = () => {
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
            <ul>
              {data.allStrapiProperty?.edges?.map(property => (
                <li key={property.node.id}>
                  <p><Link to={`/property/${property.node.slug}`}>{property.node.address}</Link></p>
                </li>
              ))}
            </ul>
          )}
        />
        <h2><Link to="/download-all">Or download all</Link></h2>
        <p>well download them all twice in either situation because I dont know what I'm doing</p>
      </main>
      <footer>
        Sierra Lighting
      </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const query = graphql`
query IndexQuery {
  allStrapiProperty {
    edges {
      node {
        id
        address
        slug
      }
    }
  }
}
`