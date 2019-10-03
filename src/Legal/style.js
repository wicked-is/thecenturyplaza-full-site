
import { css } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 6}vw;
    margin: 40px 0 0;
  `}

  h1 {
    margin: 0 0 3em; 
  }

  p {
    font-family: ${props => props.theme.sansSerifLight};
  }

  h4 {
    margin: 40px 0 0;
    font-family: ${props => props.theme.sansSerifLight};
  }
`