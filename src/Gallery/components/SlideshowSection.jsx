import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import SlideshowMedia from "Gallery/components/SlideshowMedia.jsx";
import { ViewportWrapper } from "../../shared/styled-components/Layouts.js";

const SlideshowWrapper = styled.div`
  ${ViewportWrapper};
`;

const SlideshowSection = ({ section }) => {
  return (
    <SlideshowWrapper>
      <Router>
        {section.media.map((media, index) => (
          <SlideshowMedia
            key={index}
            path={media.slug}
            media={media}
            default={index === 0 && true}
          />
        ))}
      </Router>
    </SlideshowWrapper>
  );
};

export default SlideshowSection;
