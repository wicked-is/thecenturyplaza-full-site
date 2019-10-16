import { css } from "styled-components";
import { Container } from "../shared/styled-components/Layouts.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 12}vw;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 6}vw;
  `}

  p {
    font-family: ${props => props.theme.sansSerifLight}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    
    a {
      color:  ${props => props.theme.black};

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
