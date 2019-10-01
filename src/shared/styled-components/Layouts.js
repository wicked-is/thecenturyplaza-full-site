
import { css } from 'styled-components';
import { fadeIn } from "shared/styled-components/Transitions.js";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const Wrapper = css`
  height: auto;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  margin: 0 ${props => props.theme.mobileMargin}px;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;

  ${ mediaMin.tabletLandscape`
    width: calc(100vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px);
    margin: 0 ${props => props.theme.desktopMargin}px;
  `}
  
`

export const ViewportWrapper = css`
  ${Wrapper}
  height: calc(100vw - ${props => props.theme.header});
`

export const Container = css`
  height: auto;
  width: 100%;
  margin: 0;

  ${ mediaMin.tabletLandscape`
    width: 100%;
  `}

`