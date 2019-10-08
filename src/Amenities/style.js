import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 20px 0 0;
  color: ${props => props.theme.white};
  
  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 5}vw;
    margin: 40px 0 0;
  `}

`;

export const ContentStyled = css`
  margin: 5em 0;
  columns: 250px 2;
  column-fill: balance;
  column-gap: 20px;
  min-height: 500px;
`;

export const SectionTitleStyled = css`
  margin: 0 0 30px;
  padding: 0;
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.35em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
`;

export const SectionStyled = css`
  width: 100%;
  display: inline-block;
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
    }
  }
`;
export const ListStyled = css`
  break-inside: avoid;
  margin: 0 0 30px;
`;

export const ListTitleStyled = css`
  margin: 0 0 20px;
  padding: 0;
  font-family: ${props => props.theme.sansSerifLightItalic}, sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.35em;
  font-style: Italic;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
`;

export const LinksStyled = css`
  font-family: ${props => props.theme.sansSerifMedium}, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  color: ${props => props.theme.white};
  text-align: center;
  display: block;
  margin: 0.5em 0;

  &:hover {
    opacity: 0.5;
  }
`;

export const DisclaimerStyled = css`
  margin: 3rem 0 0;
  padding: 0;
  font-family: ${props => props.theme.sansSerifLigh}, sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.35em;
  letter-spacing: 0.025em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
`;
