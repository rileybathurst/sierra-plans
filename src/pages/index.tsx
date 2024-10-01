import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";

type cardTypes = {
  id: string,
  slug: string,
  name: string,
  address: string,
  jobber: string,
  jobbertakedown: string
}
function Card({ slug, name, address, jobber, jobbertakedown }: cardTypes): JSX.Element {
  return (
    <Link
      to={`/p/${slug}`}
      className="card card__plan"
    // ? why is this not a card?
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
  )
}

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
  // console.log(areaArray)

  return (
    <>
      <Header />

      <main className="index-main">
        <h2>Areas</h2>
        <ul className="areas-list">
          {areaArray.map((areas) => (
            allStrapiArea.nodes
              .filter((area: { plans: { areas: { slug: string }[] }[] }) => area.plans[0]?.areas[0]?.slug === areas)
              .filter((area: { plans: cardTypes[] }) => area.plans.length > 0)
              .map((area: { id: string, name: string, slug: string, plans: cardTypes[] }) => (
                <li key={area.id}>
                  <h3><Link to={`#${area.slug}`}>{area.name}</Link></h3>
                </li>
              ))
          ))}
        </ul>

        {/* TODO: add a usestate option drop to pull the right one */}
        {/* <h2>// TODO: file naming guidelines for all pieces</h2> */}

        <h2>Download a single set of plans</h2>

        {areaArray.map((areas) => (
          allStrapiArea.nodes
            .filter((area: { plans: { areas: { slug: string }[] }[] }) => area.plans[0]?.areas[0]?.slug === areas)
            .map((area: { id: string, name: string, slug: string, plans: cardTypes[] }) => (
              <div key={area.id} id={area.slug}>
                <h3><Link to={`areas/${area.slug}`}>{area.name}</Link></h3>
                {area.plans.map((plan) => (
                  <Card
                    key={plan.id}
                    {...plan}
                  />
                ))}
              </div>
            ))

        ))}

        <h2><Link to="/download-all">Or download all</Link></h2>
        <p>well download them all twice in either situation because I dont know what I'm doing</p>
      </main >
      <footer>
        Sierra Lighting
      </footer>
    </>
  )
}

export default IndexPage

// Purposuley very little SEO on this site
export const Head: HeadFC = () => <title>Sierra Lighting Plans</title>
