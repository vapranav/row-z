import React from "react";
import { Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import KuttyHero from "../components/Hero";
import Navbar from "../components/Navbar";
import Ma from "../components/Blog";
import Sj from "../components/Footer";

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
