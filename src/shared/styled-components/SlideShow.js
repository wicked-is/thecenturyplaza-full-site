import { css } from "styled-components";
import {
  slideOne,
  slideTwo,
  slideThree,
  slideFour
} from "shared/styled-components/Transitions.js";

export const SlideShow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  img:nth-child(1) {
    position: relative;
    z-index: 140;
    opacity: 0;
    animation: ${slideOne} 12s ease-in-out 0.5s infinite;
  }

  img:nth-child(2) {
    position: absolute;
    z-index: 130;
    opacity: 0;
    animation: ${slideTwo} 12s ease-in-out 0.5s infinite;
  }

  img:nth-child(3) {
    position: absolute;
    z-index: 120;
    opacity: 0;
    animation: ${slideThree} 12s ease-in-out 0.5s infinite;
  }

  img:nth-child(4) {
    position: absolute;
    z-index: 110;
    opacity: 0;
    animation: ${slideFour} 12s ease-in-out 0.5s infinite;
  }
`;
