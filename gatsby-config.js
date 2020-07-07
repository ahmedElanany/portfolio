/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ahmed's Portfolio",
    description: "this is a wonderful portfolio",
    author: "@ahmedElanani",
    twitterUsername: "@Ahmed82065042",
    image: "/twitter-img.jpg",
    siteUrl: "https://portfolio-ahmed.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
     {
       resolve: `gatsby-source-strapi`,
       options: {
         apiURL: `http://localhost:1337`,
         queryLimit: 1000, // Default to 100
         contentTypes: [`jobs`, `projects`, `blogs`],
         singleTypes:[`about`]
       }
     },
     {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
         fonts: [
           {
             family: `Roboto`,
             variants: [`400`, `700`],
           },
           {
             family: `Open Sans`,
           },
         ],
       },
     },
  ],
}
