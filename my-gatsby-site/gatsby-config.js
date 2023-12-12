/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ryutaro Asahara",
        short_name: "Ryutaro Asahara",
        start_url: "/",
        background_color: "#ffea18",
        theme_color: "#5155c0",
        display: "standalone",
        icon: './src/images/profile.jpg',
      },
    },
  ],
}
