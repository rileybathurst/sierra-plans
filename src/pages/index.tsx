import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import type { cardTypes } from "../types/card-types";
import Card from "../components/card";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {

  const { allStrapiArea } = useStaticQuery(graphql`
    query indexQuery {

      allStrapiArea {
        nodes {
          id
          name
          slug
          plans {
            ...planCard
          }
        }
      }
    
    }
  `)

  const areaSet = new Set();

  for (const area of allStrapiArea.nodes) {
    area.plans.map((area: { areas: { slug: string }[] }) => {
      areaSet.add(area.areas[0].slug)
    })
  }
  const areaArray = Array.from(areaSet);

  return (
    <>
      <Header />

      <main className="index-main">

        <h2>Download a single set of plans</h2>

        {areaArray.map((areas) => (
          allStrapiArea.nodes
            .filter((area: { plans: { areas: { slug: string }[] }[] }) => area.plans[0]?.areas[0]?.slug === areas)
            .map((area: { id: string, name: string, slug: string, plans: cardTypes[] }) => (
              <div key={area.id} id={area.slug}>
                <h3>
                  {area.name}
                </h3>
                {area.plans.map((plan) => (
                  <Card
                    key={plan.id}
                    {...plan}
                  />
                ))}
              </div>
            ))

        ))}

        <h2>Areas</h2>
        <ul className="areas-list">
          {areaArray.map((areas) => (
            allStrapiArea.nodes
              .filter((area: { plans: { areas: { slug: string }[] }[] }) => area.plans[0]?.areas[0]?.slug === areas)
              .filter((area: { plans: cardTypes[] }) => area.plans.length > 0)
              .map((area: { id: string, name: string, slug: string, plans: cardTypes[] }) => (
                <li key={area.id}>
                  <Link to={`#${area.slug}`}>
                    {area.name}
                  </Link>
                </li>
              ))
          ))}
        </ul>
      </main >
      <Footer />
    </>
  )
}

export default IndexPage

// * Purposuley very little SEO on this site
export const Head: HeadFC = () => <title>Sierra Lighting Plans</title>
