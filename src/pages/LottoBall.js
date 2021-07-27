import React, { Component } from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

class LottoBall extends Component {
  render() {
    return (
      <Text
        ml={2}
        textTransform='uppercase'
        fontSize='sm'
        fontWeight='bold'
        color='pink.800'
      >
        Verified &bull; Cape Town
      </Text>
    );
  }
}

export default LottoBall;
