// const path = require("path");
// //const slugifyPost = require("./slugifyPost");

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   const { result } = await graphql(`
//     {
//       competitions: allMongodbMyFirstDatabaseCompetitions {
//         edges {
//           node {
//             id
//             mongodb_id
//             name
//           }
//         }
//       }
//     }
//   `);

//   const pageTemplate = path.resolve("./src/DisplayData.js");

//   for (const { node } of result.competitions.edges) {
//     createPage({
//       path: "/book/${node.id}/",
//       component: path.resolve("./src/DisplayData.js"),
//       context: {
//         id: node.mongodb_id,
//       },
//     });
//   }
// };
