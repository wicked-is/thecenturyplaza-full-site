import React, { useContext } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components/macro";
import Context from "../../config/Context";
import { mediaMin } from "../styled-components/MediaQueries.js";

const InnerScrollContainer = styled.span`
  position: absolute;
  transition: all 0.5s ease-in-out;
  top: ${props =>
    props.isExpanded ? "0" : props.theme.mobilePortraitHeaderHeight + "px"};
  left: ${props =>
    props.isExpanded ? "0" : props.theme.mobileSideMargin + "px"};
  display: inline-block;
  width: ${props =>
    props.isExpanded
      ? "100vw"
      : "calc(100vw - " + parseFloat(props.theme.mobileSideMargin) * 2 + "px)"};
  height: ${props =>
    props.isExpanded
      ? "100%"
      : "calc(100% - " +
        parseFloat(props.theme.mobilePortraitHeaderHeight) * 2 +
        "px)"};
  margin: 0;
  z-index: 600;

  ${mediaMin.phoneXL`
    top: ${props =>
      props.isExpanded ? "0" : props.theme.mobileLandscapeHeaderHeight + "px"};
    height: ${props =>
      props.isExpanded
        ? "100%"
        : "calc(100% - " +
          parseFloat(props.theme.mobileLandscapeHeaderHeight * 2) +
          "px)"};
    padding: 0;
  `}

  ${mediaMin.tablet`
    top: ${props =>
      props.isExpanded ? "0" : props.theme.desktopHeaderHeight + "px"};
    height: ${props =>
      props.isExpanded
        ? "100%"
        : "calc(100% - " +
          parseFloat(props.theme.desktopHeaderHeight * 2) +
          "px)"};
    padding: 0;
  `}


  ${mediaMin.tabletLandscape`
    width: ${props =>
      props.isExpanded
        ? "100vw"
        : "calc(100vw - " +
          parseFloat(props.theme.desktopSideMargin) * 2 +
          "px)"};
    left: ${props =>
      props.isExpanded ? "0" : props.theme.desktopSideMargin + "px"};
  `}
`;

const SlideVideoScrollController = ({
  previousPath,
  nextPath,
  isExpanded,
  isFirstSection,
  isFirstSlide,
  toggleExpand
}) => {
  const context = useContext(Context);
  const { pauseScroll, triggerExit } = context;

  return (
    <InnerScrollContainer isExpanded={isExpanded}>
      <ReactScrollWheelHandler
        pauseListeners={pauseScroll}
        upHandler={() => {
          isExpanded && toggleExpand();
          !isExpanded && isFirstSection && isFirstSlide && toggleExpand();
          !isExpanded &&
            !isFirstSection &&
            !isFirstSlide &&
            triggerExit(previousPath);
          !isExpanded &&
            !isFirstSection &&
            isFirstSlide &&
            triggerExit(previousPath);
          !isExpanded &&
            isFirstSection &&
            !isFirstSlide &&
            triggerExit(previousPath);
        }}
        downHandler={() => {
          isExpanded ? toggleExpand() : triggerExit(nextPath);
        }}
        rightHandler={() => {
          isExpanded && toggleExpand();
          !isExpanded && isFirstSection && isFirstSlide && toggleExpand();
          !isExpanded &&
            !isFirstSection &&
            !isFirstSlide &&
            triggerExit(previousPath);
          !isExpanded &&
            !isFirstSection &&
            isFirstSlide &&
            triggerExit(previousPath);
          !isExpanded &&
            isFirstSection &&
            !isFirstSlide &&
            triggerExit(previousPath);
        }}
        leftHandler={() => {
          isExpanded ? toggleExpand() : triggerExit(nextPath);
        }}
      ></ReactScrollWheelHandler>
    </InnerScrollContainer>
  );
};
export default SlideVideoScrollController;
