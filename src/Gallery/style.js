import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";
import { fadeIn } from "shared/styled-components/Transitions.js";

export const ContainerStyled = css`
  ${Container}
  width: 100%;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: 100%;
    margin: 40px 0 0;
  `}
`;
export const SectionStyled = css`
  margin: 0 0 50px;
`;
export const SectionTitlesStyled = css`
  position: relative;

  ${mediaMin.tabletLandscape` 
    @supports (display: grid) {
      top: 100px;
      position: sticky;
    }
  `}

  h2 {
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }
`;
export const SectionTitleStyled = css`
  margin: 0 10px 20px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;

  ${mediaMin.tabletLandscape` 
    margin: 0;
  `}
`;

export const SectionMediaStyled = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: center;
`;
export const MediaStyled = css`
  margin: 0 10px 20px 10px;
  width: calc(33.333% - 20px);
  float: left;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;

  ${mediaMin.tabletLandscape` 
    margin: 0 0 20px 20px;
  `}
`;
