import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "../styles/stylesheet.css";
import { graphql } from "gatsby";

let Homepage = ({ data }) => {
  let blogPosts = data.allSanityPost.nodes;
  console.log(blogPosts);
  return (
    <Layout>
      <div className='bg-white dark:bg-dark-gray h-screen'>
        <h1 className='md:text-4xl text-2xl text-center text-black dark:text-white p-4 font-raleway font-bold'>
          BLOGS
        </h1>
        <hr className='w-1/6 mx-auto'></hr>
        <p className='w-1/2 text-lg text-center mx-auto font-normal text-black dark:text-white mt-4 font-raleway'>
          Beautifully curated content at your fingertip
        </p>
        {/* <BlockContent blocks={results} /> */}
        {blogPosts.map((post) => (
          // <ul className='text-black dark:text-white'>{post.author.name}</ul>
          <Link to={"../published/" + post._rawSlug.current}>
            <div className='bg-figma-blue w-3/4 mx-auto h-1/4 mt-5 px-10 py-5 rounded filter drop-shadow'>
              <p className='font-merriweather font-bold text-white'>
                {post.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityPost {
      nodes {
        _rawSlug
        author {
          name
        }
        categories {
          title
        }
        title
      }
    }
  }
`;

export default Homepage;
