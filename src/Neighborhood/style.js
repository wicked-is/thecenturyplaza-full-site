import { css } from "styled-components";
import { Wrapper, Container } from "shared/styled-components/Layouts.js";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js";

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
  font-size: 11.5px;
  letter-spacing: 0.5px;
  font-family: ${props => props.theme.sansSerifItalic};
`;
export const ItemHeadlineStyled = css`
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: ${props => props.theme.sansSerifMedium};
  margin: 0 0 20px;
`;
export const ItemCopyStyled = css`
  font-size: 2em;
  letter-spacing: 1px;
  font-family: ${props => props.theme.sansSerifLight};
  margin: 0;
`;
export const ItemCTAStyled = css`
  font-size: 14px;
  letter-spacing: 0.65px;
  font-family: ${props => props.theme.sansSerifMedium};
  margin: 40px 0 0 0;

  a {
    color: ${props => props.theme.gray};

    &:hover {
      opacity: 0.5;
    }
  }
`;
