import React from "react";
import styled from "styled-components";
import { SlideContainerStyled, TextMaskStyled } from "Primary/style.js";
import parse from "html-react-parser";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
// import { navigate } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const SlideContainer = styled.div`${SlideContainerStyled};`;
const TextMask = styled.div`${TextMaskStyled};`;

const TextSlide = props => {
  const { slide, nextPath, previousPath, toggleExpand, closeExpand } = props;

  return (
    <ReactScrollWheelHandler
      // pauseListeners={true}
      upHandler={() => {
        // console.log("scroll up");
        // closeExpand();
        // if (props.location === previousPath) {
        //   // console.log("where you going");
        //   // navigate(previousPath);
        // } else {
        //   // console.log(props.location);
        //   // navigate(previousPath);
        // }
        // navigate(previousPath);
      }}
      downHandler={() => {
        // console.log("scroll down")
        // closeExpand();
        // if (props.location === nextPath) {
        //   console.log("where you going");
        //   // navigate(nextPath);
        // } else {
        //   console.log(props.location);
        //   console.log(nextPath);
        //   // navigate(nextPath);
        // }
        // navigate(nextPath);
      }}
    >
      <SlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        {slide.headline.length > 0 && <h2><TextMask />{parse(slide.headline)}</h2>}
        {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default TextSlide;
