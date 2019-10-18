import { css } from "styled-components";
import {
  imageOne,
  imageTwo,
  imageThree
  // imageFour
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
    animation: ${imageOne} 12s ease-in-out 0.5s infinite;
  }

  img:nth-child(2) {
    position: absolute;
    z-index: 130;
    opacity: 0;
    animation: ${imageTwo} 12s ease-in-out 0.5s infinite;
  }

  img:nth-child(3) {
    position: absolute;
    z-index: 120;
    opacity: 0;
    animation: ${imageThree} 12s ease-in-out 0.5s infinite;
  }

  ${"" /* Uncomment this out if a 4th Image is added to the Slideshow on the Split Slide type, image was removed for rights reasons last minute. Corresponding update on Transitions.js and naturally an additional data entry is needed for PrimaryData.json where source is declared */}

  ${"" /* img:nth-child(4) {
    position: absolute;
    z-index: 110;
    opacity: 0;
    animation: ${imageFour} 12s ease-in-out 0.5s infinite;
  } */}
`;
