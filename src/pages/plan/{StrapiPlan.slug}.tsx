import * as React from "react"
import { graphql } from "gatsby"
import PlanView from "../views/plan-view"

export const query = graphql`
  query PlanQuery($slug: String!) {
    strapiPlan(slug: { eq: $slug }) {
      id
      name
      address
      area {
        name
      }
      slug
      svg
      childStrapiPlanNotesTextnode {
        notes
      }
      
      teams {
        name
      }
      createdAt(formatString: "MMMM YYYY")
      updatedAt(formatString: "MMMM YYYY")
    }
  }
`

const PlanPage = ({ data }) => {
  const plan = data.strapiPlan;
  return (
    <PlanView
      plan={plan}
    />
  );
};

export default PlanPage;
