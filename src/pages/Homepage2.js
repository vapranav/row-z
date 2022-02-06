import React from "react";
import Layout from "../components/Layout";
import "../styles/stylesheet.css";
import { graphql } from "gatsby";
import Image from "gatsby-plugin-sanity-image";

let Homepage = ({ data }) => {
  let convertDate = (date) => {
    var dateObject = new Date(date);
    var converted = dateObject.toString().substring(4, 15);
    return converted;
  };
  let blogPosts = data.allSanityPost.nodes;
  //console.log(blogPosts);
  return (
    <Layout>
      <div className='bg-white dark:bg-dark-gray h-auto'>
        <h1 className='md:text-4xl text-2xl text-center text-black dark:text-white p-4 font-raleway font-bold'>
          BLOGS
        </h1>
        <hr className='w-1/6 mx-auto'></hr>
        <p className='w-1/2 text-lg text-center mx-auto font-normal text-black dark:text-white mt-4 font-raleway'>
          Beautifully curated content at your fingertip
        </p>
        {/* <BlockContent blocks={results} />
        {blogPosts.map((post) => (
          // <ul classNameName='text-black dark:text-white'>{post.author.name}</ul>
          <Link to={"../published/" + post._rawSlug.current}>
            <div classNameName='bg-figma-blue w-3/4 mx-auto h-1/4 mt-5 px-10 py-5 rounded filter drop-shadow z-0'>
              <p classNameName='font-merriweather font-bold text-white'>
                {post.title}
              </p>
            </div>
          </Link>
        ))} */}

        <section>
          <div
            className='
          relative
          items-center
          w-full
          px-5
          py-12
          mx-auto
          md:px-12
          lg:px-24
          max-w-7xl
        '
          >
            <div className='relative mx-auto max-w-7xl'>
              <div className='grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
                {blogPosts.map((post) => (
                  <div className='flex flex-col mb-12 overflow-hidden cursor-pointer'>
                    <a href={"../published/" + post._rawSlug.current}>
                      <div className='flex-shrink-0'>
                        <Image
                          className='object-cover w-full h-48 rounded-lg'
                          asset={post.mainImage.asset}
                        />
                      </div>
                    </a>
                    <div className='flex flex-col justify-between flex-1'>
                      <a href={"../published/" + post._rawSlug.current}> </a>
                      <div className='flex-1'>
                        <a href={"../published/" + post._rawSlug.current}>
                          <div
                            className='flex pt-6 space-x-1 text-sm text-black
                        dark:text-white'
                          >
                            <time> {convertDate(post._createdAt)} </time>
                            <span aria-hidden='true'> · </span>
                            <span> 4 min read </span>
                          </div>
                        </a>
                        <a
                          href={"../published/" + post._rawSlug.current}
                          className='block mt-2 space-y-6'
                        >
                          <h3
                            className='
                        text-2xl
                        font-semibold
                        leading-none
                        tracking-tighter
                        text-black
                        dark:text-white
                      '
                          >
                            {" "}
                            {post.title}{" "}
                          </h3>

                          <p
                            className='text-lg font-normal text-black
                        dark:text-white'
                          >
                            {" "}
                            BLAH BLAH BLAH BLAH BLAH{" "}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityPost {
      nodes {
        _createdAt
        _rawSlug
        author {
          name
        }
        categories {
          title
        }
        title
        mainImage {
          asset {
            _id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Homepage;
