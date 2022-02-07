const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          title
          _rawSlug
          _id
          categories {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  //const pageTemplate = path.resolve("./src/templates/post.js");

  const posts = result.data.allSanityPost.nodes || [];
  posts.forEach((post, index) => {
    console.log(post);
    const Path = `/published/${post._rawSlug.current}`;
    let pageTemplate =
      post.categories[0].title == "d3"
        ? path.resolve(`./src/pages/${post._rawSlug.current}.js`)
        : path.resolve("./src/templates/post.js");
    createPage({
      path: Path,
      component: pageTemplate,
      context: { title: post.title, id: post._id },
    });
    console.log(post._id);
  });
};
