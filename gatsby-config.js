module.exports = {
  siteMetadata: {
    title: 'Archive',
    author: 'Jason',
    description: 'A new beginning',
    excerptMaxLength: 250,
    siteUrl: 'https://ecstatic-galileo-a840d4.netlify.com/'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        /*
        * See https://github.com/TryGhost/gatsby-source-ghost
        * for the latest information on obtaining the API
        * endpoint. You may need to add the domain that makes
        * calls to the Ghost Public API into the 
        * client_trusted_domains. To do this see
        * https://api.ghost.org/docs/ajax-calls-from-an-external-website
        */
        apiUrl: `https://workshop-2.ghost.io/`,
        clientId: `ghost-frontend`,
        clientSecret: `25b50c709d36`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
