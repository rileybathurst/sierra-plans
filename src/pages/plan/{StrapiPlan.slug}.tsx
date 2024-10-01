import * as React from "react"
import { graphql } from "gatsby"

import Pdfbuild from "../../components/pdf-build";
import Header from "../../components/header";
import Footer from "../../components/footer";

export const query = graphql`
  query PlanQuery($slug: String!) {
    strapiPlan(slug: { eq: $slug }) {
      id
      name
      address
      zip
      areas {
        name
        state
      }
      slug
      svg

      notes {
        data {
          notes
        }
      }

      jobber
      jobbertakedown
      
      teams {
        name
      }
      createdAt(formatString: "MMMM YYYY")
      updatedAt(formatString: "MMMM YYYY")

      takedownFlexOrder
      takedownday {
        date(formatString: "DD MMM YY")
        crew
      }
    }
  }
`

type PlanPageTyes = {
  data: {
    strapiPlan: {
      id: string,
      name: string,
      address: string,
      zip: string,
      areas: {
        name: string,
        state: string
      },
      slug: string,
      svg: string,
      notes: {
        data: {
          notes: string
        }
      },
      jobber: string,
      jobbertakedown: string,
      teams: {
        name: string
      },
      createdAt: string,
      updatedAt: string,
      takedownFlexOrder: string,
      takedownday: {
        date: string,
        crew: string
      }
    }
  }
}
const PlanPage = ({ data }: PlanPageTyes) => {
  const plan = data.strapiPlan;
  return (
    <>
      <Header />
      <Pdfbuild
        plan={plan}
      />
      <Footer />
    </>
  );
};

export default PlanPage;

/* // ! I think this is the problem it changed at some point I need to document it
childStrapiPlanNotesTextnode {
  notes
} */