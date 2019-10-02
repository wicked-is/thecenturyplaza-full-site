
import { css } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const ContainerStyled = css`
  ${Container}
  width: 100%;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: 100%;
    margin: 40px 0 0;
  `}
`
export const SectionStyled = css`
  margin: 0 0 50px;
`
export const SectionTitleStyled = css`
  margin: 0 10px 20px;

  ${mediaMin.tabletLandscape` 
    margin: 0;
    position: fixed;
  `}
`
export const SectionMediaStyled = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`
export const MediaStyled = css`
  margin: 0 10px 20px 10px;
  width: calc(33.333% - 20px);
  float: left;

  ${mediaMin.tabletLandscape` 
    margin: 0 0 20px 20px;
  `}
`