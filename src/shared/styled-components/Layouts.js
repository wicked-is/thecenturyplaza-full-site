
import { css } from 'styled-components';
import { fadeIn } from "shared/styled-components/Transitions.js";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const Wrapper = css`
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  min-height: calc(100vh - 160px);
  margin: 0 ${props => props.theme.mobileMargin}px 0;
  padding: ${props => props.theme.headerHeight}px 0 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;

  ${ mediaMin.tabletLandscape`
    width: calc(100vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px);
    margin: 0 ${props => props.theme.desktopMargin}px 0;
  `}
  
`

export const ViewportWrapper = css`
  ${Wrapper}
  height: calc(100vh - ${props => props.theme.headerHeight}px - ${props => props.theme.headerHeight}px);
`

export const Container = css`
  height: auto;
  width: 100%;
  margin: 0;

  ${ mediaMin.tabletLandscape`
    width: 100%;
  `}

`