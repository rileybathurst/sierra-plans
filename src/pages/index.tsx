import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import AreaList from "../components/area-list";

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
          id
          address
          slug
          name
          jobber
          jobbertakedown
        }
      }

      truckee: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "truckee"
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

      caughlin: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "caughlin"
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

      alpine: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "alpine"
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

      homewood: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "homewood"
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
    
      incline: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "incline"
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
    
      kings: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "kings"
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
    
      olympic: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "olympic"
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
    
      grays: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "grays"
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
    
      martis: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "martis"
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
    
      lahontan: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "lahontan"
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
    
      southlake: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "southlake"
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
    
      tahoma: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "tahoma"
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
    
      carson: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "carson"
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
    
      minden: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "minden"
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
    
      stateline: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "stateline"
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

      reno: allStrapiPlan
      (filter: {areas: {elemMatch: {slug: {
        eq: "reno"
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
    
    # // ! is this wrong and should be damonte?
    damone: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "damone"
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

    gelena: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "gelena"
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
    
      montreux: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "montreux"
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
    
      somersett: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "somersett"
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
    
      sparks: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "sparks"
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
          id
          address
          slug
          name
          jobber
          jobbertakedown
        }
      }
    
      verdi: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "verdi"
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
          id
          address
          slug
          name
          jobber
          jobbertakedown
        }
      }
    
      newwashoecity: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "new-washoe-city"
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
    
      markleeville: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "markleeville"
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
    
      glenbrook: allStrapiPlan(filter: {areas: {elemMatch: {slug: {
        eq: "glenbrook"
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
          id
          address
          slug
          name
          jobber
          jobbertakedown
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

  return (
    <>
      <Header />

      <main>
        <AreaList />

        {/* TODO: add a usestate option drop to pull the right one */}
        {/* <h2>// TODO: file naming guidelines for all pieces</h2> */}

        <h2>Download a single set of plans</h2>

        <h3><Link to="/areas/northlake">North Lake Tahoe</Link></h3>
        <ul>
          {northlake.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/truckee">Truckee</Link></h3>
        <ul>
          {truckee.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/caughlin">Caughlin</Link></h3>
        <ul>
          {caughlin.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/alpine">Alpine Meadows</Link></h3>
        <ul>
          {alpine.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/homewood">Homewood</Link></h3>
        <ul>
          {homewood.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/incline">Incline Village</Link></h3>
        <ul>
          {incline.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/kings">Kings Beach</Link></h3>
        <ul>
          {kings.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/olympic">Olympic Valley</Link></h3>
        <ul>
          {olympic.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/grays">Grays Crossing</Link></h3>
        <ul>
          {grays.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/martis">Martis Camp</Link></h3>
        <ul>
          {martis.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/lahontan">Lahontan</Link></h3>
        <ul>
          {lahontan.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/southlake">Southlake</Link></h3>
        <ul>
          {southlake.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/tahoma">Tahoma</Link></h3>
        <ul>
          {tahoma.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/carson">Carson City</Link></h3>
        <ul>
          {carson.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/minden">Minden</Link></h3>
        <ul>
          {minden.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/truckee">Truckee</Link></h3>
        <ul>
          {reno.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/truckee">Truckee</Link></h3>
        <ul>
          {reno.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/truckee">Truckee</Link></h3>
        <ul>
          {reno.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/stateline">Stateline</Link></h3>
        <ul>
          {stateline.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/reno">Reno</Link></h3>
        <ul>
          {reno.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/damone">Damone</Link></h3>
        <ul>
          {damone.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/gelena">Gelena</Link></h3>
        <ul>
          {gelena.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/montreux">Montreux</Link></h3>
        <ul>
          {montreux.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/somersett">Somersett</Link></h3>
        <ul>
          {somersett.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/sparks">Sparks</Link></h3>
        <ul>
          {sparks.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/spanish">Spanish Springs</Link></h3>
        <ul>
          {spanish.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/montreux">Montreux</Link></h3>
        <ul>
          {montreux.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/donner">Donner Pass</Link></h3>
        <ul>
          {donner.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/verdi">Verdi</Link></h3>
        <ul>
          {verdi.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/new-washoe-city">New Washoe City</Link></h3>
        <ul>
          {newwashoecity.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/markleeville">Markleeville</Link></h3>
        <ul>
          {markleeville.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3><Link to="/areas/glenbrook">Glenbrook</Link></h3>
        <ul>
          {glenbrook.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>

        <h3>These Need A Home</h3>
        <ul>
          {other.nodes.map((plan: { id: React.Key; }) => (
            <li key={plan.id}>
              <Stack plan={plan} />
            </li>
          ))}
        </ul>





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
