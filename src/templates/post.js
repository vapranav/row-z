import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "../styles/stylesheet.css";
import Image from "gatsby-plugin-sanity-image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DiscussionEmbed } from "disqus-react";

const BlockContent = require("@sanity/block-content-to-react");
const serializers = {
  types: {
    exampleUsage: (props) => (
      <SyntaxHighlighter
        language={props.node.language || "text"}
        style={monokaiSublime}
        wrapLongLines={true}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};

const Post = (props, pageContext) => {
  const results = props.data.sanityPost;
  const { _rawBody } = results;
  const { mainImage } = results;
  const { id } = pageContext;
  const disqusConfig = {
    shortname: "rowz",
    config: { identifier: id },
  };
  console.log(mainImage);
  return (
    <Layout>
      <Image asset={mainImage.asset} alt='' width={500} />
      <BlockContent
        blocks={_rawBody}
        serializers={serializers}
        className='bg-dark-gray text-white p-4'
      />
      <div className='bg-white dark:bg-dark-gray p-10'>
        <DiscussionEmbed {...disqusConfig} />
      </div>
    </Layout>
  );
};

export default Post;

export const PageQuery = graphql`
  query ($id: String!) {
    sanityPost(_id: { eq: $id }) {
      _rawBody
      mainImage {
        asset {
          _id
          gatsbyImageData
        }
      }
    }
  }
`;
