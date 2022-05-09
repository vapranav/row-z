import React from "react";
import imageUrlBuilder from "@sanity/image-url";
const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

let BlockImage = (props) => {
  const url = props.props;
  console.log(url);
  return (
    <div className='flex justify-center'>
      <img src={urlFor(props.props.asset._ref).url()} />
    </div>
  );
};

export default BlockImage;
