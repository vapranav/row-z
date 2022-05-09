import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import "../styles/stylesheet.css";
import Image from "gatsby-plugin-sanity-image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DiscussionEmbed } from "disqus-react";
import D3 from "../components/d3";
import BlockImage from "../components/imageRef";

const BlockContent = require("@sanity/block-content-to-react");
const serializers = {
  types: {
    exampleUsage: (props) => (
      <div style={{ maxWidth: "100%" }}>
        <SyntaxHighlighter
          language={props.node.language || "text"}
          style={monokaiSublime}
          wrapLines={true}
          wrapLongLines={true}
        >
          {props.node.code}
        </SyntaxHighlighter>
      </div>
    ),
    data: (props) => <D3 props={props} />,
    image: (props) => <BlockImage props={props.node} />,
    break: (props) => {
      const { style } = props.node;
      if (style === "break") {
        return <div className='p-4' />;
      }
    },
  },
};

const Post = (props, pageContext) => {
  const results = props.data.sanityPost;
  const { _rawBody } = results;
  const { mainImage } = results;
  const { title } = results;
  const { id } = pageContext;
  const disqusConfig = {
    shortname: "rowz",
    config: { identifier: id },
  };
  //console.log(mainImage);
  return (
    <Layout>
      <div className='h-half-screen'>
        <Image
          asset={mainImage.asset}
          alt=''
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <h1 className='font-bold lg:px-20 bg-dark-gray text-white p-4'>
        {title}
      </h1>
      <BlockContent
        blocks={_rawBody}
        serializers={serializers}
        className='lg:px-20 bg-dark-gray text-white p-4'
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
      title
      mainImage {
        asset {
          _id
          gatsbyImageData
        }
      }
    }
  }
`;
