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
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const pageTemplate = path.resolve("./src/templates/post.js");

  const posts = result.data.allSanityPost.nodes || [];
  posts.forEach((post, index) => {
    console.log(post);
    const Path = `/published/${post._rawSlug.current}`;
    createPage({
      path: Path,
      component: pageTemplate,
      context: { title: post.title, id: post._id },
    });
    console.log(post._id);
  });
};
