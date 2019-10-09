import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    margin: ${props => props.desktopMargin}px 0 0;
    width: ${props => parseFloat(props.theme.desktopColumn) * 8}vw;
  `}
`;

export const AsideStyled = css`
  ${mediaMin.tabletLandscape` 
    position: fixed;
    max-width: 15%;
  `}

  ul {
    margin: 0 0 10px;
  }

  p {
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    ::selection {
      color: ${props => props.theme.white};
      background: ${props => props.theme.black};
    }
  }
`;

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
    margin: 0;

    ::selection {
      color: ${props => props.theme.white};
      background: ${props => props.theme.black};
    }

    a {
      display: inline-block;
      width: 100%;
      color: ${props => props.theme.gray};
      text-decoration: none;
      padding: 0 0 20px;
      font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
      font-weight: 300;
      font-size: 14px;
      line-height: 1.35em;
      letter-spacing: 0.06em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;

      ::selection {
        color: ${props => props.theme.white};
        background: ${props => props.theme.black};
      }
    }
  }
`;

export const ItemsStyled = css`
  margin: 0;

  ${mediaMin.phoneXL`
    margin: ${props =>
      parseFloat(props.theme.mobileColumn) * parseFloat(props.mobileLift)}vw
      0 3.5vw;
  `}

  ${mediaMin.tabletLandscape` 
    margin: ${props =>
      parseFloat(props.theme.desktopColumn) * parseFloat(props.desktopLift)}vw
      0 3.5vw;
  `}

  img {
    margin: 0 0 ${props => props.theme.mobileMargin}px;

    ${mediaMin.phoneXL`
      margin: 0;
    `}
  }
`;
