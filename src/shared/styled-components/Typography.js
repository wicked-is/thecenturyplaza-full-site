import { css } from 'styled-components';
import { enterFadeIn } from 'shared/styled-components/Transitions.js';
import { mediaMin } from './MediaQueries.js';
import plusCloseSVG from 'icons/plus-icon.svg';
import footerMessageSVG from 'icons/footer-message.svg';

export const PageBody = css`
  font-family: ${props => props.theme.sansSerifRegular}, courier;
  color: ${props => props.theme.black};
  font-size: 14px;
  letter-spacing: 0.6px;
  background: ${props => props.pageColor};
  height: auto;
  min-height: 100%;
  position: relative;
  ${'' /* overflow: auto; */}

  a {
    text-decoration: none;
  }
`;

export const PageHeader = css`
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: ${props => props.theme.mobilePortraitHeaderHeight}px;
  background: ${props =>
    props.navActive
      ? props.theme.blackGradient
      : props.globalConfig.headerBackground};
  z-index: 1100;
  transition: transform 0.5s ease-in-out;
  transform: translateY(
    ${props =>
      props.isExpanded &&
      (window.location.pathname.includes('/intro') ||
        window.location.pathname === '/')
        ? '-' + props.theme.desktopHeaderHeight + 'px'
        : '0'}
  );
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.phoneXL`
    height: ${props => props.theme.mobileLandscapeHeaderHeight}px;
  `}

  ${mediaMin.tablet`
    height: ${props => props.theme.desktopHeaderHeight}px;
  `}
  

  header {
    opacity: 0;
    animation: ${enterFadeIn};
    will-change: opacity;
  }
`;

export const PageFooter = css`
  display: ${props => (props.navActive ? 'none' : 'flex')};
  position: ${props => (props.globalConfig.footerFixed ? 'fixed' : 'relative')};
  bottom: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: ${props =>
    props.navActive ? '0' : props.theme.mobilePortraitHeaderHeight + 'px'};
  background: ${props => props.globalConfig.footerBackground};
  transition: transform 0.5s ease-in-out, opacity .5s ease-in-out;
  transform: translateY(
    ${props =>
      props.isExpanded ? props.theme.mobilePortraitHeaderHeight + 'px' : '0'}
  );
  visibility: ${props => (props.navActive ? 'hidden' : 'visible')};
  overflow: ${props => (props.navActive ? 'hidden' : 'visible')};
  opacity: ${props => (props.hasCaptions ? 1 : 0)};


  ${mediaMin.phoneXL`
    height: ${props => props.theme.mobileLandscapeHeaderHeight}px;
    transform: translateY(
      ${props =>
        props.isExpanded ? props.theme.mobileLandscapeHeaderHeight + 'px' : '0'}
    );
  `}

  ${mediaMin.tablet`
    height: ${props => props.theme.desktopHeaderHeight}px;
    transform: translateY(
      ${props =>
        props.isExpanded ? props.theme.desktopHeaderHeight + 'px' : '0'}
    );
    
  `}

  ${mediaMin.tabletLandscape`
    position: ${props =>
      props.globalConfig.footerFixed ? 'fixed' : 'absolute'};
  `}
  
  footer {
    position: relative;
    width: 100%;
    height: 100%;

    ${mediaMin.tabletLandscape`
      display: flex;
    `}

    ul {
      display: none;

      ${mediaMin.tabletLandscape`
        display: inline-block;
      `}
    }
  }
`;

export const PagePreTitle = css`
  margin: 0 0 0;
  font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.35em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  text-align: left;
  margin: 0 0 0.5em;

  ${mediaMin.tabletLandscape`
    text-align: center;
  `}
`;

export const PageTitle = css`
  font-family: ${props => props.theme.serifRoman}, serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.1em;
  letter-spacing: 0.3em;
  margin: 0 0 1em;
  text-align: left;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;

  ${mediaMin.tabletLandscape`
    text-align: center;
    margin: 0 0 2em;
  `}

  ${mediaMin.desktop`
    margin: 0 0 3em;
  `}
`;

export const FooterMessage = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.gray};
  text-align: center;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  a {
    width: auto;
    position: relative;
    display: inline-block;
    text-align: center;
    font-family: ${props => props.theme.sansSerifLight}, courier;
    color: white;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.05em;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &::after {
      display: inline-block;
      height: 0.5em;
      width: 100%;
      content: '';
      background: url(${footerMessageSVG}) no-repeat center center;
      background-size: contain;
      margin: 0.25em 0 0;

      ${mediaMin.phoneXL`
        position: absolute;
        width: 1em;
        right: -1.25em;
        top: 0;
        transform: rotate(-90deg);
      `}

      ${mediaMin.tablet`
        position: relative;
        width: 100%;
        right: auto;
        top: auto;
        transform: rotate(0deg);
      `}
    }
  }

  ${mediaMin.tabletLandscape`
    display: none;
  `}
`;

export const SlideCaption = css`
  display: inline-block;
  position: absolute;
  height: auto;
  top: 0;
  left: 0;
  margin: 0;
  padding: 24px ${props => props.theme.mobileSideMargin}px 0;
  background: white;
  width: calc(
    100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
  );
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;
  transition: all 0.25s ease-in-out;
  ${
    '' /* Second translateY should be top-padding - height, this ensures dynamic lift based on caption length. Cannot declare Calc inside Translate due to IE error. */
  }
  transform: translateY(
      ${props => (!props.emptyCaption && props.isOpen ? '-100%' : '0')}
    )
    translateY(${props =>
      !props.emptyCaption && props.isOpen ? '36px' : '0'});

  ${mediaMin.phoneXL`
    padding: 14px ${props => props.theme.mobileSideMargin}px 0;
    ${
      '' /* Second translateY should be top-padding - height, this ensures dynamic lift based on caption length. Cannot declare Calc inside Translate due to IE error. */
    }
    transform: translateY(${props =>
      !props.emptyCaption && props.isOpen
        ? '-100%'
        : '0'}) translateY(${props =>
    !props.emptyCaption && props.isOpen ? '26px' : '0'});
  `}

  ${mediaMin.tablet`
    padding: 35px ${props => props.theme.mobileSideMargin}px 0;
    ${
      '' /* Second translateY should be top-padding - height, this ensures dynamic lift based on caption length. Cannot declare Calc inside Translate due to IE error. */
    }
    transform: translateY(${props =>
      !props.emptyCaption && props.isOpen
        ? '-100%'
        : '0'}) translateY(${props =>
    !props.emptyCaption && props.isOpen ? '45px' : '0'});
  `}

  ${mediaMin.tabletLandscape`
    display: flex;
    left: ${props => props.theme.desktopSideMargin}px;
    align-items: center;
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopSideMargin) * 2}px - 300px);
    height 80px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    transform: translateY(0);
  `}

  p {
    display: inline-block;
    opacity: ${props => (!props.emptyCaption && props.isOpen ? '1' : '0')};
    font-weight: 300;
    width: 100%;
    font-size: 12px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    margin: 1.5em 0 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    transition: all 0.25s ease-in-out;

    ${mediaMin.tabletLandscape`
      display: inline-block;
      opacity: 1;
      margin: 0;
    `}
  }

  button {
    display: inline-block;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    text-transform: uppercase;

    &:focus {
      outline: none;
    }

    &::before {
      display: inline-block;
      height: 1em;
      width: 1em;
      content: "";
      background: url(${plusCloseSVG}) no-repeat center center;
      background-size: contain;
      vertical-align: top;
      margin: 0 0.75em 0 0;
      transform: rotate(
        ${props => (!props.emptyCaption && props.isOpen ? '45deg' : '0')}
      );
      transition: transform 0.25s ease-in-out;
    }

    ${mediaMin.tabletLandscape`
      display: none;
    `}
  }

  span {
    display: inline-block;
    float: right;
    margin: 0;
    padding: 0;
    width: auto;
    color: ${props => props.theme.gray};

    ${mediaMin.tabletLandscape`
      display:none;
    `}
  }
`;
