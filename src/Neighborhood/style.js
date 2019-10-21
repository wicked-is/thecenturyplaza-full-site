import { css } from "styled-components";
import { Wrapper, Container } from "../shared/styled-components/Layouts.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";
import { fadeIn } from "../shared/styled-components/Transitions.js";

export const WrapperStyled = css`
  ${Wrapper}
`;

export const HeaderStyled = css`
  ${Container}
  width: 100%;
  height: auto;
  @supports (object-fit: cover) {
    height: 38%;
  }
  margin: 0 0 9vw;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;
  overflow: hidden;

  ${mediaMin.phoneXL` 
    height: auto;
    @supports (object-fit: cover) {
      height: 100%;
    }  
  `}

  ${mediaMin.tablet`
    height: auto;
    @supports (object-fit: cover) {
      height: 38%;
    }
  `}

  ${mediaMin.tabletLandscape` 
    width: 100%;
    height: auto;
    margin: 0 0 9vw;
    @supports (object-fit: cover) {
      height: calc(100vh - ${props =>
        parseFloat(props.theme.desktopHeaderHeight) * 2}px);
    }
  `}

  ${mediaMin.desktop` 
    margin: 0 0 9vw;
  `}

  .react-reveal {
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;

    @supports (object-fit: cover) {
      object-fit: cover;
      object-position: 100% 50%;
      height: 100%;
    }

    ${mediaMin.tabletLandscape` 

      @supports (object-fit: cover) {
        object-position: 100% 60%;
        height: 100%;
      }

    `}
  }
`;

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 12}vw;
  margin: 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 10}vw;
    margin: 0;
  `}
`;

export const ItemStyled = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 9vw;
  height: auto;
  align-items: ${props => props.valign};
  align-content: ${props => props.valign};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;
  width: 100%;

  .react-reveal {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;

export const PairedStyled = css`
  display: flex;
  align-items: flex-start;
  width: auto;

  img {
    width: calc(50% - ${props => props.theme.mobileGutter / 2}px);
    float: left;
    height: auto;
    margin-right: ${props => props.theme.mobileGutter / 2}px;

    ${mediaMin.tabletLandscape` 
      margin-right: ${props => props.theme.desktopGutter / 2}px;
    `}

    + img {
      margin-left: ${props => props.theme.mobileGutter / 2}px;
      margin-right: 0;

      ${mediaMin.tabletLandscape` 
        margin-left: ${props => props.theme.desktopGutter / 2}px;
        margin-right: 0;
      `}
    }
  }
`;

export const ItemCaptionStyled = css`
  margin: 1.5em 0 0;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.sansSerifItalic}, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.35em;
  letter-spacing: 0.03em;
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
`;
export const ItemHeadlineStyled = css`
  text-transform: uppercase;
  font-family: ${props => props.theme.sansSerifMedium}, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.32em;
  letter-spacing: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  margin: 0 0 20px;
`;
export const ItemCopyStyled = css`
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.32em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  margin: 0;

  ${mediaMin.tablet` 
    font-size: 22px;
  `}
`;

export const ItemCTAStyled = css`
  margin: 40px 0 0 0;

  a {
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.sansSerifMedium}, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &:hover {
      opacity: 0.5;
    }
  }
`;
