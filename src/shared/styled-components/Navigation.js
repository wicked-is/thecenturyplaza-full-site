import { css } from "styled-components";
import { Wrapper } from "../styled-components/Layouts.js";
import {
  enterFromBottomText,
  enterFadeIn
} from "shared/styled-components/Transitions.js";

export const MenuWrapper = css`
  ${Wrapper}
  height: calc(100vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  align-items: center;
`;

export const SecondaryMenuMenuContainerStyled = css`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  margin: 0;

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
        font-size: 40px;
        letter-spacing: 1.5px;
        color:white;

        &:hover {
          opacity: 0.5;
        }
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
