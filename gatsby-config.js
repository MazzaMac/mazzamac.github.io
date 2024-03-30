module.exports = {
  siteMetadata: {
    title: `Marianne MacRae`,
    description: `Portfolio and site for Edinburgh based Poet and Illustrator`,
    author: `@MarianneMacRae`,
    siteURL: 'https://mazzamac.github.io/',
  },
  flags: { 
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_REFRESH: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `instas`,
        path: `${__dirname}/src/instas`,
      }},{
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `poems`,
          path: `${__dirname}/src/poems`,
      }},{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }},{
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [{
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
          }}],
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },},
      {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Condensed', 'Forum', 'EB Garamond', 'Milonga', 'IM Fell Great Primer', "Space Mono"]
        }
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
