module.exports = {
  siteMetadata: {
    siteUrl: "https://blogmain69719.gatsbyjs.io/",
    title: "My Blog",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
        {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      }
    },
    ],
};
