import { css } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 50px 0 0;
    
  ${mediaMin.tabletLandscape` 
    margin: 100px 0 0;
    width: ${props => parseFloat(props.theme.desktopColumn) * 8}vw;
  `}
`

export const AsideStyled = css`

  ${mediaMin.tabletLandscape` 
    position: fixed;
    max-width: 20%;
  `}

`

export const MenuStyled = css`
  display: inline-block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    width: 100%;
    height: auto;
    margin: 0 0 20px;

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
      padding: 0 0 5px;
    }
  }
`
