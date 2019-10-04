import { css } from "styled-components";
import { Wrapper, Container } from "shared/styled-components/Layouts.js";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js";
import { fadeIn } from "shared/styled-components/Transitions.js";

export const WrapperStyled = css`
  ${Wrapper}
  flex-wrap: wrap;
`;

export const HeaderStyled = css`
  ${Container}
  width: 100%;
  height: 40vh;
  margin: 0 0 9vw;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;

  ${mediaMin.tabletLandscape` 
    width: 100%;
    height: calc(100vh - 160px);
  `}

  ${"" /* h1 {
    position: absolute;
    display: inline-block;
    width: 100%;
    font-size: 2em;
    text-align: center;
    top: 20vh;
    left: 0;
    margin: 0 0 0;
    z-index: 500;
  } */}

  img {
    width: 100%;
    height: calc(100vh - 160px);
    object-fit: cover;
  }
`;

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
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
  height: calc(100% - 9vw);
  align-items: ${props => props.valign};
  align-content: ${props => props.valign};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;
`;

export const PairedStyled = css`
  display: flex;

  img {
    width: calc(50% - ${props => props.theme.mobileGutter}px);
    float: left;
    margin-right: ${props => props.theme.mobileGutter}px;

    ${mediaMin.tabletLandscape` 
      margin-right: ${props => props.theme.desktopGutter}px;
    `}
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
  font-size: 14px;
  line-height: 1.32em;
  letter-spacing: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  margin: 0 0 20px;
`;
export const ItemCopyStyled = css`
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 28px;
  line-height: 1.32em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  margin: 0;
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
