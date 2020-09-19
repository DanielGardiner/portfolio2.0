module.exports = {
  siteMetadata: {
    title: "Daniel Gardiner",
    description: "Daniel Gardiner Portfolio website",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: require.resolve(
          "./src/components/ContentLayout/ContentLayout.js"
        ),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "projects",
      },
    },
  ],
};
