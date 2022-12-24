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

// create pages for each area that show all the plans for that area
// why do I need to come in from this side?
// try and go by pages/area/{StrapiArea.slug}.tsx

/* exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

 // this kinda feels like im backing into this

  const getAreas = makeRequest(graphql, `
    {
      allStrapiPlan {
        edges {
          node {
            slug
            areas {
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
  }); // .then(result) 

  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getAreas,
  ])
} */


/* area {
  slug
} */