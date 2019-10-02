
import { css } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const WrapperStyled = css`
  ${Wrapper}
  flex-wrap: wrap;
`

export const HeaderStyled = css`
  ${Container}
  width: 100%;
  margin: 0;
  position: relative;

  ${mediaMin.tabletLandscape` 
    width: 100%;
    margin: 0;
  `}

  h1 {
    position: absolute;
    display: inline-block;
    width: 100%;
    text-align: center;
    top: 20vh;
    left: 0;
    margin: 0 0 0;
    z-index: 500;
  }
`

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 10}vw;
    margin: 0;
  `}
`

export const ItemStyled = css`
  display: flex;
  flex-wrap: wrap;
`

export const PairedStyled = css`
  display: flex;

  img {
    width: 50%;
    float: left;
    margin-right: ${props => props.theme.desktopGutter};
  }

`

export const ItemCaptionStyled = css`
  font-size: 0.8em;
`
export const ItemHeadlineStyled = css`
  font-size: 1.4em;
  text-transform: uppercase;
`
export const ItemCopyStyled = css`
  font-size: 1.4em;
`