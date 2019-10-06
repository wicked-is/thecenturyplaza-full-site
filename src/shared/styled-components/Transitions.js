import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;
export const fadeOut = keyframes`
  0% { opacity: 1;}
  100% { opacity: 0;}
`;
export const pushUp = keyframes`
  0% { transform: translate3d(0, 3em, 0);}
  100% { transform: translate3d(0, 0, 0);}
`;
export const enterOnRight = keyframes`
  0% { transform: translate3d(2em, 0, 0);}
  100% { transform: translate3d(0, 0, 0);}
`;
export const exitOnLeft = keyframes`
  0% { transform: translate3d(0, 0, 0);}
  100% { transform: translate3d(-2em, 0, 0);}
`;

export const pushDown = keyframes`
  0% { transform: translate3d(0, -3em, 0);}
  100% { transform: translate3d(0, 0, 0);}
`;

export const pushUpVideo = keyframes`
  0% { transform: translate3d(0, 10em, 0);}
  100% { transform: translate3d(0, 0, 0);}
`;

export const pushDownVideo = keyframes`
  0% { transform: translate3d(0, 0, 0);}
  100% { transform: translate3d(0, 10em, 0);}
`;

export const cascadeText = keyframes`
  0% {transform: translateY(0);}
  100% {transform: translateY(100%);}
`;

export const revealLeft = keyframes`
  0% { transform: translateX(0);}
  100% { transform: translateX(100%);}
`;
export const revealRight = keyframes`
  0% { transform: translateX(0);}
  100% { transform: translateX(-100%);}
`;

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
