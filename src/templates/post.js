import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "../styles/stylesheet.css";

const BlockContent = require("@sanity/block-content-to-react");

const list = (props) => {
  return (
    <h1 style={{ backgroundColor: "yellow" }}>{props.node.children[0].text}</h1>
  );
};

const serializers = {
  types: {
    block: (props) =>
      props.node.style === "h1" ? (
        <h1>{props.node.children}</h1>
      ) : (
        <div>{props.node.children}</div>
      ),
  },
};

const Post = (props) => {
  const results = props.data.sanityPost;
  const { _rawBody } = results;
  //console.log(_rawBody);
  return (
    <Layout>
      <h1>Yooo!</h1>
      <ul className='list-disc list-inside'>
        <li>mcdk</li>
        <li>mcdk</li>
      </ul>
      <BlockContent
        blocks={_rawBody}
        serializer={serializers}
        className='bg-dark-gray text-white p-4'
      />
    </Layout>
  );
};

// const list = (props) => {
//     return (
//       <h1 style={{ backgroundColor: "yellow" }}>{props.node.children[0].text}</h1>
//     );
//   };

//   const Post = (props) => {
//     const results = props.data.sanityPost;
//     const { _rawBody } = results;
//     //console.log(_rawBody);
//     return (
//       <Layout>
//         <BlockContent blocks={_rawBody} serializers={{ listItem: list }} />
//       </Layout>
//     );
//   };

export default Post;

export const PageQuery = graphql`
  query ($id: String!) {
    sanityPost(_id: { eq: $id }) {
      _rawBody
    }
  }
`;
