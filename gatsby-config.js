const dotenv = require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Clear English IPA",
    description: "Private English Lessons",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-react-helmet",
    "@contentful/rich-text-react-renderer",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    },
  ],
};
