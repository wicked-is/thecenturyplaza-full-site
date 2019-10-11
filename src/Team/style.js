import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

export const ContainerStyled = css`
  ${Container}

  ${mediaMin.tabletLandscape` 
    margin: 20px 0 0;
    margin: ${props => props.desktopMargin}px 0 0;
    width: ${props => parseFloat(props.theme.desktopColumn) * 8}vw;
  `}
`;

export const AsideStyled = css`
  position: fixed;
  top: ${props => props.theme.headerHeight}px;
  left: ${props => props.theme.mobileMargin}px;
  background: white;
  z-index: 1000;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);

  ${mediaMin.tabletLandscape` 
    max-width: 15%;
    left: auto;
    margin: 20px 0 0;
  `}

  ul {
    height: 1em;
    margin: 0 0 10px;

    ${mediaMin.tabletLandscape` 
        height: auto;
    `}
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
      color: white;
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

    &.inactive {
      display: ${props => (props.isOpen ? "inline-block" : "none")};

      ${mediaMin.tabletLandscape` 
        display: inline-block;
      `}
    }

    ::selection {
      color: white;
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
        color: white;
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
