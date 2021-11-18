import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "../styles/stylesheet.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    exampleUsage: (props) => (
      <SyntaxHighlighter
        language={props.node.language || "text"}
        style={monokaiSublime}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};

const Post = (props) => {
  const results = props.data.sanityPost;
  const { _rawBody } = results;
  //console.log(_rawBody);
  return (
    <Layout>
      <BlockContent
        blocks={_rawBody}
        serializers={serializers}
        className='bg-dark-gray text-white p-4'
      />
    </Layout>
  );
};

export default Post;

export const PageQuery = graphql`
  query ($id: String!) {
    sanityPost(_id: { eq: $id }) {
      _rawBody
    }
  }
`;
