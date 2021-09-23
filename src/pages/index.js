import * as React from "react";
import { Component } from "react";
import "@fontsource/poppins";
import { graphql } from "gatsby";
// import {
//   Box,
//   Image,
//   Flex,
//   Badge,
//   Text,
//   VStack,
//   Heading,
// } from "@chakra-ui/react";

import Homepage from "./Homepage";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";

// styles
// markup

export default function IndexPage({ data }) {
  const results = data.allMongodbMyFirstDatabaseCompetitions.edges;
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='dark'></ColorModeScript>
        <Homepage />
      </ChakraProvider>
      {results.map((result) => (
        <strong>
          <b> {result.node.name} </b>
        </strong>
      ))}
      <h1>
        About {data.allMongodbMyFirstDatabaseCompetitions.edges[0].node.name}
      </h1>
    </div>
  );
}

export const query = graphql`
  query {
    allMongodbMyFirstDatabaseCompetitions {
      edges {
        node {
          name
        }
      }
    }
  }
`;
