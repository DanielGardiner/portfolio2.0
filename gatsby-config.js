module.exports = {
  siteMetadata: {
    title: "Daniel Gardiner",
    description: "Daniel Gardiner Portfolio website",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Permanent Marker",
          `Nunito`,
          `Playfair Display\:200,300`,
          `Merriweather\:300`,
          "Amiri",
          "Vollkorn",
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
