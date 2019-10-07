import { css } from 'styled-components';
import { Container } from 'shared/styled-components/Layouts.js';
import { mediaMin } from 'shared/styled-components/MediaQueries.js';

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 6}vw;
    margin: 40px 0 0;
  `}

  h1 {
    text-align: left;
    font-size: 1.25em;
    ${mediaMin.tabletLandscape`
      font-size: 2em;
      text-align: center;
    `}
    margin: 0 0 3em; 
  }
`;

export const EntryStyled = css`
  width: 100%;
  display: flex;
  margin: 0 0 1.5em;
`;

export const PubDateStyled = css`
  display: inline-block;
  margin-right: ${props => props.theme.mobileGutter}px;
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1em;
  letter-spacing: 0.05em;
  margin: 0.25em 0 0;

  ${mediaMin.tabletLandscape` 
  margin-right: ${props => parseFloat(props.theme.desktopGutter) * 2}px;
  `}
`;

export const PubInfoStyled = css`
  display: inline-block;
  margin-left: 24px;
  ${mediaMin.tabletLandscape`
    margin-left: 0;
  `}

  h2 {
    margin: 0;
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  a {
    color: ${props => props.theme.black};
    &:hover {
      opacity: 0.5;
    }
  }

  p {
    font-family: ${props => props.theme.sansSerifLightItalic}, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.1em;
    letter-spacing: 0.05em;
    font-style: italic;
    margin: 0.75em 0 0;
  }
`;
