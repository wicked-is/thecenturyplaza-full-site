import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`
export const pushDownIn = keyframes`
  0% { opacity: 0; transform: translateY(-10%);}
  100% { opacity: 1; transform: translateY(0);}
`
export const pushUpIn = keyframes`
  0% { opacity: 0; transform: translateY(10%);}
  100% { opacity: 1; transform: translateY(0);}
`

export const cascadeText = keyframes`
  0% {transform: translateY(0);}
  100% {transform: translateY(100%);}
`