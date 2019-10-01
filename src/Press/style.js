
import { css } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 50px 0 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 6}vw;
    margin: 100px 0 0;
  `}

  h1 {
    margin: 0 0 3em; 
  }
`

export const EntryStyled = css`
  width: 100%;
  display: flex;
  margin: 0 0 1.5em;

  h2 {
    margin: 0;
  }

  a {
    color: ${props => props.theme.black}
  }
`

export const PubDateStyled = css`
  display: inline-block;
  margin-right: ${props => props.theme.mobileGutter}px;

  ${mediaMin.tabletLandscape` 
  margin-right: ${props => parseFloat(props.theme.desktopGutter) * 2}px;
  `}
`

export const PubInfoStyled = css`
  display: inline-block;
  
`