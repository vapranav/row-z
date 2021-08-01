import React from "react";
import { Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import KuttyHero from "./Hero";
import Navbar from "./Navbar";
import Ma from "./Blog";
import Sj from "./Footer";

export default function Homepage() {
  const bg = useColorModeValue("white", "gray.600");
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
      <Sj></Sj>
    </div>
  );
}
