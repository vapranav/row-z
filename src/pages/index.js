import * as React from "react";
import { Component } from "react";
import "@fontsource/poppins";
import Lotto from "./Lotto";
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

class IndexPage extends Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='dark'></ColorModeScript>
        <Homepage />
      </ChakraProvider>
    );
  }
}

export default IndexPage;
