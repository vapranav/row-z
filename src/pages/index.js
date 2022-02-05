//https://row-z.netlify.app/Homepage/

import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "../styles/stylesheet.css";

// import { Component } from "react";
// import "@fontsource/poppins";
// import { graphql } from "gatsby";
// // import {
// //   Box,
// //   Image,
// //   Flex,
// //   Badge,
// //   Text,
// //   VStack,
// //   Heading,
// // } from "@chakra-ui/react";

// import Homepage from "./Homepage";
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import theme from "../theme";

// // styles
// // markup

// export default function IndexPage({ data }) {
//   const results = data.allMongodbMyFirstDatabaseCompetitions.edges;
//   return (
//     <div>
//       <ChakraProvider theme={theme}>
//         <ColorModeScript initialColorMode='dark'></ColorModeScript>
//         <Homepage />
//       </ChakraProvider>
//       {results.map((result) => (
//         <strong>
//           <b> {result.node.name} </b>
//         </strong>
//       ))}
//       <h1>
//         About {data.allMongodbMyFirstDatabaseCompetitions.edges[0].node.name}
//       </h1>
//     </div>
//   );
// }

// export const query = graphql`
//   query {
//     allMongodbMyFirstDatabaseCompetitions {
//       edges {
//         node {
//           name
//         }
//       }
//     }
//   }
// `;

export default function IndexPage() {
  return (
    <Layout>
      <section className='w-full h-screen bg-white dark:bg-dark-gray'>
        <div
          className='
  relative
  items-center
  w-full
  px-5
  py-12
  mx-auto
  md:px-12
  lg:px-16
  max-w-7xl
  lg:py-24
'
        >
          <div className='flex w-full mx-auto text-left'>
            <div className='relative inline-flex items-center mx-auto align-middle'>
              <div className='text-center'>
                <h1
                  className='
          max-w-5xl
          text-2xl
          font-bold
          leading-none
          tracking-tighter
          text-neutral-600
          text-black dark:text-white
          md:text-5xl
          lg:text-6xl lg:max-w-7xl
        '
                >
                  {" "}
                  Great reads and stunning <br className='hidden lg:block' />
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                    {" "}
                    visualizations{" "}
                  </span>
                  to stimulate your mind.{" "}
                </h1>
                <p
                  className='
          max-w-xl
          mx-auto
          mt-8
          text-base
          leading-relaxed
          text-black dark:text-gray-300
        '
                >
                  {" "}
                  I'm Pranav and this is my storybook of sorts. Expect lots of
                  sports, technology and good vibes 😄
                </p>
                <div className='flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6'>
                  <div className='mt-3 rounded-lg sm:mt-0'>
                    <Link to={"/Homepage2"}>
                      <button
                        className='
              items-center
              block
              px-5
              py-4
              text-base
              font-medium
              text-center text-white
              transition
              duration-500
              ease-in-out
              transform
              bg-blue-400
              lg:px-10
              rounded-xl
              hover:bg-blue-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-blue-500
            '
                      >
                        {" "}
                        Go To Blog{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
