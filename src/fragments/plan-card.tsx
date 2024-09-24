import { graphql } from "gatsby"

export const query = graphql`
  fragment planCard on STRAPI_PLAN {
    id
    address
    slug
    name
    jobber
    jobbertakedown
    areas {
      id
      name
      slug
    }
  }
`