import { css, keyframes } from "styled-components";

export const activeLine = keyframes`
  0% { width: 0; left: 50%;}
  100% { width: 100%; left: 0;}
`;

export const enterActiveLink = props =>
  css`
    ${activeLine} 0.25s ease-out forwards;
  `;

export const fadeIn = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

export const enterFadeIn = props =>
  css`
    ${fadeIn} 0.5s ease-out 0.4s forwards;
  `;

export const fromSwipe = keyframes`
  0% { right: 0; }
  100% { right: 100vw;}
`;

export const enterFromSwipe = props =>
  css`
    ${fromSwipe} 1s ease-out 0.4s forwards;
  `;

export const fromCenter = keyframes`
  0% { opacity: 0; transform: scale(0.9);}
  100% { opacity: 1; transform: scale(1);}
`;

export const enterFromCenter = props =>
  css`
    ${fromCenter} 1.25s cubic-bezier(0, 0.7, 0.3, 1) 0.4s forwards;
  `;

export const fromBottomText = keyframes`
  0% { opacity: 0; transform: translate3d(0, 3em, 0);}
  100% { opacity: 1; transform: translate3d(0, 0, 0);}
`;

export const enterFromBottomText = props =>
  css`
    ${fromBottomText} 1.25s cubic-bezier(0, 0.7, 0.3, 1) 0.4s forwards;
  `;

export const fromBottomImage = keyframes`
  0% { opacity: 0; transform: translate3d(0, 5em, 0);}
  75% { opacity: 1;}
  100% { opacity: 1; transform: translate3d(0, 0, 0);}
`;

export const enterFromBottomImage = props =>
  css`
    ${fromBottomImage} 1.25s cubic-bezier(0, 0.7, 0.3, 1) 0.4s forwards;
  `;

// Transition Archive
// export const cascadeText = keyframes`
//   0% {transform: translateY(0);}
//   100% {transform: translateY(100%);}
// `;
// export const revealLeft = keyframes`
//   0% { transform: translateX(0);}
//   100% { transform: translateX(100%);}
// `;
// export const revealRight = keyframes`
//   0% { transform: translateX(0);}
//   100% { transform: translateX(-100%);}
// `;

// Custom Slideshow Animations. Each Slide gets 25% (4 Slides)
// Assuming 4s or 6.25% per sec to cover three states In, On & Out
// 0.5s (3.125%) for In, 3s(18.75%) for On, 0.5s(3.125%) for Out
// Shift figures according for Slides 2, 3, 4
// Control overal time with duration value when calling animation
// set delay for any intro animations on parent container

export const slideOne = keyframes`
  0% { opacity: 0;}
  3.125% { opacity: 1;}
  18.75% { opacity: 1;}
  25% { opacity: 0;}
  100% { opacity: 0;}
`;
export const slideTwo = keyframes`
  0% { opacity: 0;}
  25% { opacity: 0;}
  28.125% { opacity: 1;}
  46.875% { opacity: 1;}
  50% { opacity: 0;}
  100% { opacity: 0;}
`;
export const slideThree = keyframes`
  0% { opacity: 0;}
  50% { opacity: 0;}
  53.125% { opacity: 1;}
  71.875% { opacity: 1;}
  75% { opacity: 0;}
  100% { opacity: 0;}
`;

export const slideFour = keyframes`
  0% { opacity: 0;}
  75% { opacity: 0;}
  78.125% { opacity: 1;}
  96.875% { opacity: 1;}
  100% { opacity: 0;}
`;
