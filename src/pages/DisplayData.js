import React from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";

// // import Layout from "../components/layout";
// // import slugifyPost from "../../slugifyPost";

// export default function DisplayData() {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allMongodbMyFirstDatabaseCompetitions {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <div>
//       <h1>{data}</h1>
//       {/* <ul>
//       {data.allMongodbMyFirstDatabaseCompetitions.edges.map((webHook) => (
//         <li key={webHook.node.id}>
//           <strong>
//             <b> {webHook.node.name} </b>
//           </strong>
//         </li>
//       ))}
//     </ul> */}
//     </div>
//   );
// }

// // class DisplayData extends React.Component {
// //   render() {
// //     const webHook = this.props.data.allMongodbMyFirstDatabaseCompetitions.edges;
// //     return (
// //       <div>
// //         <h1>Post List</h1>
// //         <ul>
// //           {webHook.map((webHook) => (
// //             <li key={webHook.node.id}>
// //               <strong>
// //                 <b> {webHook.node.name} </b>
// //               </strong>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   }
// // }
// //export default DisplayData;

export default function DisplayData() {
  return <div>Hello World!</div>;
}
