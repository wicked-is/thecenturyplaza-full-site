import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import SlideshowMedia from "Gallery/components/SlideshowMedia.jsx";
import { ViewportWrapper } from "shared/styled-components/Layouts.js";

const SlideshowWrapper = styled.div`
  ${ViewportWrapper};
`;

const SlideshowSection = ({ galleryData, section }) => {
  return (
    <SlideshowWrapper>
      <Router>
        {section.media.map((item, index) => (
          <SlideshowMedia
            key={index}
            path={item.slug}
            item={item}
            default={index === 0 && true}
          />
        ))}
      </Router>
    </SlideshowWrapper>
  );
};

export default SlideshowSection;
