import React from "react";
import Image from "gatsby-plugin-sanity-image";

let BlockImage = (props) => {
  const url = props.props.node.asset;
  console.log(url);
  return (
    <div className='h-image-size flex justify-center'>
      <Image asset={props.props.node.asset} alt=''></Image>
    </div>
  );
};

export default BlockImage;
