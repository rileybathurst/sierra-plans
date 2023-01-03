import * as React from "react"
import { graphql } from "gatsby"
import UpdateBuild from "../../components/update-build";

export const query = graphql`
  query PlanQuery($slug: String!) {
    strapiPlan(slug: { eq: $slug }) {
      id
      name
      address
      areas {
        name
      }
      slug
      svg
      childStrapiPlanNotesTextnode {
        notes
      }

      jobber
      jobbertakedown
      
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
    <UpdateBuild
      plan={plan}
    />
  );
};

export default PlanPage;
