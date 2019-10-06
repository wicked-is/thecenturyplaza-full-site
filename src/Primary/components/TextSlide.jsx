import React, { useContext } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { navigate } from "@reach/router";

import Context from "../../config/Context";
import { SlideContainerStyled, TextMaskStyled } from "Primary/style.js";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
// const TextMask = styled.div`
//   ${TextMaskStyled};
// `;

const TextSlide = ({ slide, nextPath, previousPath }) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        navigate(previousPath);
        scrollCooldown();
      }}
      downHandler={() => {
        navigate(nextPath);
        scrollCooldown();
      }}
    >
      <SlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        {slide.headline.length > 0 && (
          <h2>
            {/* <TextMask /> */}
            {parse(slide.headline)}
          </h2>
        )}
        {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default TextSlide;
