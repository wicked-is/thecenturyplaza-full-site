import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ '*': path, seoData }) => {
  const { title, description } = seoData.routes[path] || seoData.default;
  console.log({ path, title, description })
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
export default SEO;
