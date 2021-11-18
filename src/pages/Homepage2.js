import React from "react";
import Layout from "../components/Layout";
import "../styles/stylesheet.css";
import { graphql } from "gatsby";

let Homepage = ({ data }) => {
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
          // <ul className='text-black dark:text-white'>{post.author.name}</ul>
          <Link to={"../published/" + post._rawSlug.current}>
            <div className='bg-figma-blue w-3/4 mx-auto h-1/4 mt-5 px-10 py-5 rounded filter drop-shadow z-0'>
              <p className='font-merriweather font-bold text-white'>
                {post.title}
              </p>
            </div>
          </Link>
        ))} */}

        <section>
          <div
            class='
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
            <div class='relative mx-auto max-w-7xl'>
              <div class='grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
                {blogPosts.map((post) => (
                  <div class='flex flex-col mb-12 overflow-hidden cursor-pointer'>
                    <a href={"../published/" + post._rawSlug.current}>
                      <div class='flex-shrink-0'>
                        <img
                          class='object-cover w-full h-48 rounded-lg'
                          src='https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2024&amp;q=80'
                          alt=''
                        />
                      </div>
                    </a>
                    <div class='flex flex-col justify-between flex-1'>
                      <a href={"../published/" + post._rawSlug.current}> </a>
                      <div class='flex-1'>
                        <a href={"../published/" + post._rawSlug.current}>
                          <div class='flex pt-6 space-x-1 text-sm text-gray-300'>
                            <time datetime='2020-03-10'> Mar 10, 2020 </time>
                            <span aria-hidden='true'> · </span>
                            <span> 4 min read </span>
                          </div>
                        </a>
                        <a
                          href={"../published/" + post._rawSlug.current}
                          class='block mt-2 space-y-6'
                        >
                          <h3
                            class='
                        text-2xl
                        font-semibold
                        leading-none
                        tracking-tighter
                        text-white
                      '
                          >
                            {" "}
                            {post.title}{" "}
                          </h3>

                          <p class='text-lg font-normal text-gray-300'>
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
