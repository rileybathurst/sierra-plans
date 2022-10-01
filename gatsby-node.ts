const path = require(`path`)

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getAreas = makeRequest(graphql, `
    {
      allStrapiPlan {
        edges {
          node {
            slug
            area {
              name
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each partner resorts.
    result.data.allStrapiBrand.edges.forEach(({ node }) => {
      createPage({
        path: `/area/${node.slug}`,
        component: path.resolve(`src/templates/area.tsx`),
        context: {
          slug: node.slug,
          retail: node.retail.series
        },
      })
    })
  }); // .then(result) */

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getAreas,
  ])
}