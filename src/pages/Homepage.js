import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import KuttyHero from "./Hero";
import Navbar from "./Navbar";
import Ma from "./Blog";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <KuttyHero />
      <Wrap p={25} justify='center'>
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
