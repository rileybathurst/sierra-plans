import type { GatsbyConfig } from "gatsby"

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    'plans',
  ],
  singleTypes: [],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sierra Plans`,
    siteUrl: `https://www.sierra.lighting`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sass`
],
}

export default config
