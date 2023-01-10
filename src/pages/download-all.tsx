// ! I havent tested this yet and it seems a lot Im not sure I need it anymore

import React, { useRef, useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";

import UpdateBuild from "../components/update-build";

const DownloadAllPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiPlan?.edges?.map(plan => (
            <li key={plan.node.id}>
              <PDFBuilder
                svv={plan.node.svg}
                slug={plan.node.slug}
                name={plan.node.name}
                address={plan.node.address}
                area={plan?.node?.area?.name}
                teams={plan.node.teams}
                notes={plan.node?.childStrapiPlanNotesTextnode?.notes}
                createdAt={plan.node.createdAt}
                updatedAt={plan.node.updatedAt}
              />
            </li>
          ))}
        </ul>
      )}
    />
  )
}

export default DownloadAllPage

const query = graphql`
query DownloadAllQuery {
  allStrapiPlan {
    edges {
      node {
        id
        address
        svg
        childStrapiPlanNotesTextnode {
          notes
        }

        slug
        name
        areas {
          name
        }
        teams {
          name
        }
        
        
        createdAt
        updatedAt
      }
    }
  }
}
`
