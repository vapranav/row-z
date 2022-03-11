import React from "react";
import Image from "gatsby-plugin-sanity-image";

let BlockImage = (props) => {
  return <Image asset={props.props.node.asset} alt=''></Image>;
};

export default BlockImage;
