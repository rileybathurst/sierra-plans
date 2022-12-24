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
      allStrapiPlans {
        edges {
          node {
            slug
            area {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiPlan.edges.forEach(({ node }) => {
      createPage({
        path: `/area/${node?.area?.slug}`,
        component: path.resolve(`src/templates/area.tsx`),
        context: {
          slug: node?.slug
        },
      })
    })
  }); // .then(result) */

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getAreas,
  ])
}


/* area {
  slug
} */