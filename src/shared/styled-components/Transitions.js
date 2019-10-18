import { css, keyframes } from "styled-components";

export const scrollPlease = keyframes`
  0% { bottom: 2px; opacity: 1;}
  70% { bottom: 27px; opacity: 0; }
  100% { bottom: 27px; opacity: 0; }
`;

export const showScrollPlease = props =>
  css`
    ${scrollPlease} 1.75s ease-out 1s infinite;
  `;

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

export const exitFromCenter = props =>
  css`
    ${fromCenter} 0.5s cubic-bezier(0, 0.7, 0.3, 1) reverse forwards;
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

// ----------------------------------------------------------------------
// Custom Slideshow Animations. Each Image gets 33% (3 Images)
// Assuming 4s or 8.25% per sec to cover three states In, On & Out
// 0.5s (4.125%) for In, 3s(24.75%) for On, 0.5s(4.125%) for Out
// Shift figures according for Images 2, 3
// Control overall time with duration value when calling animation
// set delay for any intro animations on parent container
// If additonal images are need divide total by 100% and use 4s ratios
// ----------------------------------------------------------------------
// p.s. Why custom and not Slick.js? We implemented Slick.js and the
// animation was not as smooth, this is a passive experience for the user
// the math is simple and this pure CSS solution yielded the best results.
// If this Slideshow was ever needed in multiple areas of the site it
// would be worth the investment to make a Mixin.
// ----------------------------------------------------------------------

export const imageOne = keyframes`
  0% { opacity: 0;}
  4.125% { opacity: 1;}
  24.75% { opacity: 1;}
  33% { opacity: 0;}
  100% { opacity: 0;}
`;
export const imageTwo = keyframes`
  0% { opacity: 0;}
  33% { opacity: 0;}
  37.125% { opacity: 1;}
  61.875% { opacity: 1;}
  66% { opacity: 0;}
  100% { opacity: 0;}
`;
export const imageThree = keyframes`
  0% { opacity: 0;}
  66% { opacity: 0;}
  70.125% { opacity: 1;}
  94.875% { opacity: 1;}
  100% { opacity: 0;}
`;

// ----------------------------------------------------------------------
// Custom Slideshow Animations. Each Image gets 25% (4 Images) of 100%
// Assuming 4s or 6.25% per sec to cover three states In, On & Out
// 0.5s (3.125%) for In, 3s(18.75%) for On, 0.5s(3.125%) for Out
// Shift figures according for Images 2, 3, 4
// Control overal time with duration value when calling animation
// set delay for any intro animations on parent container
// If additonal images are need divide total by 100% and use 4s ratios
// ----------------------------------------------------------------------

// Uncomment this out if a 4th Image is added to the Slideshow on the Split Slide type. image was removed for rights reasons last minute. Corresponding update on Slideshow.js and naturally an additional data entry is needed for PrimaryData.json where source is declared

// export const imageOne = keyframes`
//   0% { opacity: 0;}
//   3.125% { opacity: 1;}
//   18.75% { opacity: 1;}
//   25% { opacity: 0;}
//   100% { opacity: 0;}
// `;
// export const imageTwo = keyframes`
//   0% { opacity: 0;}
//   25% { opacity: 0;}
//   28.125% { opacity: 1;}
//   46.875% { opacity: 1;}
//   50% { opacity: 0;}
//   100% { opacity: 0;}
// `;
// export const imageThree = keyframes`
//   0% { opacity: 0;}
//   50% { opacity: 0;}
//   53.125% { opacity: 1;}
//   71.875% { opacity: 1;}
//   75% { opacity: 0;}
//   100% { opacity: 0;}
// `;

// export const imageFour = keyframes`
//   0% { opacity: 0;}
//   75% { opacity: 0;}
//   78.125% { opacity: 1;}
//   96.875% { opacity: 1;}
//   100% { opacity: 0;}
// `;

// ----------------------------------------------------------------------
// Transition Archive for a rainey day.
// keeping in the even Johnny wants to explore the reveal concept again.
// ----------------------------------------------------------------------

// export const revealLeft = keyframes`
//   0% { transform: translateX(0);}
//   100% { transform: translateX(100%);}
// `;
// export const revealRight = keyframes`
//   0% { transform: translateX(0);}
//   100% { transform: translateX(-100%);}
// `;
