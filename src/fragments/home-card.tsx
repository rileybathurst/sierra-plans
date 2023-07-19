import { graphql } from "gatsby"

export const query = graphql`
  fragment homeCard on STRAPI_PLAN {
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