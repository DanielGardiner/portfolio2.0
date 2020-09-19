import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Helmet = () => {
  const { title, description } = useSiteMetadata();
  return (
    <ReactHelmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </ReactHelmet>
  );
};

export default Helmet;
