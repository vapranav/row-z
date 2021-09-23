module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "RowZ",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString:
          "mongodb+srv://Pranav:Recovery72@cluster0.p5op3.mongodb.net",
        dbName: `myFirstDatabase`,
        collection: `competitions`,
        // connectionString: "mongodb://localhost:27017",
        // dbName: `ybox`,
        // collection: `competitions`,
      },
      query: { documents: { as_of: { $gte: 1604397088013 } } },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
