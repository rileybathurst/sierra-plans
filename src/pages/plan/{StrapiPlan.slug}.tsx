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

// ? I wondering if adding types here would help diagnose if this is the problem
const PlanPage = ({ data }) => {
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