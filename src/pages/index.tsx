import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import AreaList from "../components/area-list";

function Plans(props) {
  if (props.plans.nodes) {
    // console.log(props?.plans.nodes)

    if (props.plans.nodes[0]?.areas) {
      // console.log(props.plans.nodes[0]?.areas[0]?.name)
      // console.log(props.plans.nodes[0]?.id)

      return (
        <>
          <Link to={`/areas/${props.plans.nodes[0]?.areas[0]?.slug}`}>
            <h3>{props.plans.nodes[0]?.areas[0]?.name}</h3>
          </Link>
          <ul>
            {props.plans.nodes.map((plan: { id: React.Key; }) => (
              <li key={plan.id}>
                <Stack plan={plan} />
              </li>
            ))}
          </ul>
        </>
      );
    }
  } else {
    console.log("🏝️")
    return null;
  }
}

function Stack(props: {
  plan: {
    id: React.Key;
    slug: string;
    name: string;
    address: string;
    jobber: number;
    jobbertakedown: number;
  }
}) {
  return (
    <Link
      to={`/plan/${props.plan.slug}`}
      className="stack"
    // ? why is this not a card?
    >
      <section className="name">
        <h3>{props.plan.name}</h3>
        <p className="supra">Name</p>
      </section>
      <section className="address">
        {props.plan.address}
        <p className="supra">Address</p>
      </section>
      <section className="jobber">
        {props.plan.jobber}
        <p className="supra">Jobber</p>
      </section>
      <section className="jobbertakedown">
        {props.plan.jobbertakedown}
        <p className="supra">Jobber Takedown</p>
      </section>
    </Link>
  )
}

const IndexPage = () => {

  const query = useStaticQuery(graphql`
    query allStrapiPlan {

      northlake: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "northlake"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }

      truckee: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "truckee"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }

      caughlin: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "caughlin"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }

      alpine: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "alpine"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }

      homewood: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "homewood"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      incline: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "incline"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      kings: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "kings"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      olympic: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "olympic"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      grays: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "grays"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      martis: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "martis"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      lahontan: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "lahontan"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      southlake: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "southlake"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      tahoma: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "tahoma"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      carson: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "carson"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      minden: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "minden"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      stateline: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "stateline"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }

      reno: allStrapiPlan
      (filter: {areas: {elemMatch: {slug: {
        eq: "reno"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
    # // ! is this wrong and should be damonte?
    damone: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "damone"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }

    gelena: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "gelena"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      montreux: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "montreux"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      somersett: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "somersett"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      sparks: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "sparks"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      spanish: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "spanish"
        }}}})
      {
        nodes {
          id 
          address
          slug
          name
          jobber
          jobbertakedown
        }
      }
    
      donner: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "donner"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      verdi: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "verdi"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      donner: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "donner"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      newwashoecity: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "new-washoe-city"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      markleeville: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "markleeville"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      glenbrook: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "glenbrook"
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
      other: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        nin: [
          "northlake",
          "truckee",
          "caughlin",
          "alpine",
          "homewood",
          "incline",
          "kings",
          "olympic",
          "grays",
          "martis",
          "lahontan",
          "southlake",
          "tahoma",
          "carson",
          "minden",
          "stateline",
          "reno",
          "damone",
          "gelena",
          "montreux",
          "somersett",
          "sparks",
          "spanish",
          "donner",
          "verdi",
          "new-washoe-city",
          "markleeville" ,
          "glenbrook"
        ]
        }}}})
      {
        nodes {
          ...homeCard
        }
      }
    
    }
  `)

  const northlake = query.northlake;
  const truckee = query.truckee;
  const caughlin = query.caughlin;
  const alpine = query.alpine;
  const homewood = query.homewood;
  const incline = query.incline;
  const kings = query.kings;
  const olympic = query.olympic;
  const grays = query.grays;
  const martis = query.martis;
  const lahontan = query.lahontan;
  const southlake = query.southlake;
  const tahoma = query.tahoma;
  const carson = query.carson;
  const minden = query.minden;
  const stateline = query.stateline;
  const reno = query.reno;
  const damone = query.damone;
  const gelena = query.gelena;
  const montreux = query.montreux;
  const somersett = query.somersett;
  const sparks = query.sparks;
  const spanish = query.spanish;
  const donner = query.donner;
  const verdi = query.verdi;
  const newwashoecity = query.newwashoecity;
  const markleeville = query.markleeville;
  const glenbrook = query.glenbrook;
  const other = query.other;

  let areas = [
    northlake,
    truckee,
    caughlin,
    alpine,
    homewood,
    incline,
    kings,
    olympic,
    grays,
    martis,
    lahontan,
    southlake,
    tahoma,
    carson,
    minden,
    stateline,
    reno,
    damone,
    gelena,
    montreux,
    somersett,
    sparks,
    spanish,
    donner,
    verdi,
    newwashoecity,
    markleeville,
    glenbrook,
    other
  ]

  return (
    <>
      <Header />

      <main className="index-main">
        <AreaList />

        {/* TODO: add a usestate option drop to pull the right one */}
        {/* <h2>// TODO: file naming guidelines for all pieces</h2> */}

        <h2>Download a single set of plans</h2>
        {areas.map((areas) => (
          <div key={areas.nodes[0]?.id}>
            <Plans plans={areas} />
          </div>
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
