import React from "react";
import { Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import KuttyHero from "./Hero";
import Navbar from "./Navbar";
import Ma from "./Blog";

export default function Homepage() {
  const bg = useColorModeValue("white", "#1B1B2F");
  return (
    <div>
      <Navbar />
      <KuttyHero />
      <Wrap bg={bg} p={25} justify='center'>
        <WrapItem>
          <Ma></Ma>
        </WrapItem>
        <WrapItem>
          <Ma></Ma>
        </WrapItem>
      </Wrap>
    </div>
  );
}
