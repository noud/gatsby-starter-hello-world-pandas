/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
		  siteMetadata: {
			    title: `Hello World Pandas`,
			  },
	plugins : [
	    {
	        resolve: `gatsby-plugin-manifest`,
	        options: {
	          name: `GatsbyStarterHelloWorldPandas`,
	          short_name: `GatsbyStarterHelloWorldPandas`,
	          start_url: `/`,
	          background_color: `#6b37bf`,
	          theme_color: `#6b37bf`,
	          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
	          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
	          display: `standalone`,
	          icon: `src/images/icon.png`, // This path is relative to the root of the site.
	        },
	      },
	      `gatsby-plugin-offline`,
	      `gatsby-plugin-react-helmet`,
	    {
	        resolve: `gatsby-source-filesystem`,
	        options: {
	          name: `src`,
	          path: `${__dirname}/src/`,
	        },
	      },
	      `gatsby-transformer-remark`,
	    `gatsby-plugin-emotion`,
		{
			resolve : `gatsby-plugin-typography`,
			options : {
				pathToConfigModule : `src/utils/typography`,
			},
		},
	],
}