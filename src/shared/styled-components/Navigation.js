import { css } from "styled-components";
import { Wrapper } from "../styled-components/Layouts.js";
import {
  enterActiveLink,
  enterFromBottomText,
  enterFadeIn
} from "../styled-components/Transitions.js";
import { mediaMin } from "../styled-components/MediaQueries.js";

export const ActiveMenuContainerStyled = css`
  display: none;

  ${mediaMin.tabletLandscape`
    display: inline-block;
    width: 121%;
    height: auto;
    text-align: center;
    top: 15px;
    position: absolute;
    padding: 0;
    opacity: 1;

    li {
      display: inline-block;
      margin: 0 15px;

      a {
        position: relative;
        color: ${props => props.theme.black};
        text-decoration: none;
        padding: 0 0 5px;
        font-family: ${props => props.theme.sansSerifLight}, sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.35em;
        letter-spacing: 0.056em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
    

        &::after {
            position: absolute;
            bottom: -1px;
            left: 50%;
            right: 0;
            display: inline-block;
            content: "";
            width: 0;
            height: 1px;
            background: ${props => props.theme.black};
          }

        &.active {
          &::after {
            width: 100%;
            left: 0;
          }
        }

        &:hover:not(.active)  {
          &::after {
            animation: ${enterActiveLink};
          }
        }
      }
    }
  `}

  ${mediaMin.desktopSmall`
    width: 100%;
  `}
`;

export const MenuWrapper = css`
  ${Wrapper}
  height: calc(100vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
`;

export const SecondaryMenuContainerStyled = css`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape`
    margin: 40px 0 0;
  `}

  ${mediaMin.desktop`
    margin: 80px 0 0;
  `}

  ul {
    list-style: none;
    margin: 0 0 80px;
    padding: 0;
    height: auto;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    li {
      margin: 0 0 20px;

      a {
        font-family: ${props => props.theme.sansSerifThin};
        font-size: 28px;
        letter-spacing: 1.5px;
        color:white;

        &:hover {
          opacity: 0.5;
        }

        ${mediaMin.tabletLandscape`
          font-size: 30px;
        `}

        ${mediaMin.desktop`
          font-size: 40px;
        `}
      }
    }
  }

  span > a {
    font-family: ${props => props.theme.sansSerifLight};
    color: ${props => props.theme.black};
    opacity: 0;
    animation: ${enterFadeIn};
    will-change: opacity;

    &:hover {
      opacity: 0.5;
    }
  }
}
`;

export const FooterWrapper = css`
  z-index: 10000;

  ul {
    display: inline-block;
    position: absolute;
    bottom: 30px;
    right: 40px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 0 0 20px;

      a {
        font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
        font-weight: 300;
        font-size: 12px;
        line-height: 1.35em;
        letter-spacing: 0.03em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        color: ${props =>
          props.navActive || props.isLight
            ? props.theme.black
            : props.theme.gray};
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;
