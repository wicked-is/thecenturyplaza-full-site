import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
// import Grid from "styled-components-grid";
// import Fade from "react-reveal/Fade";
// import LazyLoad from "react-lazyload";

import {
  SlideshowContainerStyled
  // SectionTitlesStyled,
  // SectionTitleStyled,
  // SectionMediaStyled,
  // MediaStyled
} from "Gallery/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";

const SlideshowContainer = styled.section`
  ${SlideshowContainerStyled};
`;
// const GallerySectionTitles = styled.div`
//   ${SectionTitlesStyled};
// `;
// const GallerySectionTitle = styled.h2`
//   ${SectionTitleStyled};
// `;
// const GallerySectionMedia = styled.div`
//   ${SectionMediaStyled};
// `;
// const GalleryMedia = styled.div`
//   ${MediaStyled};
// `;

const SlideshowMedia = ({ item }) => {
  return (
    <SlideshowContainer>
      {item.type === "image" && <ResponsiveImage srcPath={item.source} />}
      <p>{item.caption}</p>
    </SlideshowContainer>
  );
};

export default SlideshowMedia;
