import * as React from "react"
import { Link } from "gatsby";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";

const AreaView = ({ area }) => {
  return (
    <>
      <Header />
      <main>
        <h1>{area.name}</h1>

        <ul className="deck">
          {area.plans.map((plan: {
            id: string;
            slug: string;
            name: string;
            address: string;
            areas: string[] | {
              name: string;
              state: string;
            }[];
            jobber: number;
            jobbertakedown: number;
            takedownday: any;
          }) => (
            <Card
              key={plan.id}
              slug={plan.slug}
              name={plan.name}
              address={plan.address}
              areas={plan.areas}
              jobber={plan.jobber}
              jobbertakedown={plan.jobbertakedown}
              takedownday={plan.takedownday}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default AreaView;
