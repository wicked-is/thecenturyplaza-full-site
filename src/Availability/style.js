import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";
import sortAscendingPNG from "icons/sort-ascending.png";
import sortAscendingSVG from "icons/sort-ascending.svg";
import sortDescendingPNG from "icons/sort-descending.png";
import sortDescendingSVG from "icons/sort-descending.svg";

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 10}vw;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 10}vw;
    margin: 40px 0 0;
  `}
${
  "" /* 
  h1 {
    margin: 0 0 3em; 
  }

  p {
    font-family: ${props => props.theme.sansSerifLight}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    
    a {
      color:  ${props => props.theme.black};

      &:hover {
        opacity: 0.5;
      }
    }
  } */
}
`;

export const HeaderStyled = css`
  width: 100%;
  margin: 0 0 5vw;

  p {
    text-align: left;
    margin: 0 0 0.5em;
    text-transform: uppercase;
    font-family: ${props => props.theme.sansSerifMedium}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &::after {
      display: inline-block;
      content: "s";
      margin: 0;
    }

    ${mediaMin.tabletLandscape` 
      margin: 0 0 1em;
      text-align: center;
      text-transform: none;
      font-family: ${props => props.theme.sansSerifLight}, sans-serif;
      letter-spacing: 0.035em;

      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        content: "Select a Residence";
        margin: 0 0.4em 0 0; 
      }
    `}
  }
`;

export const TableStyled = css`
  width: 100%;
  table-layout: fixed;

  thead {
    tr {
      th {
        text-align: left;
        border-bottom: 1px solid ${props => props.theme.grayLight};
        text-transform: uppercase;
        font-family: ${props => props.theme.sansSerifLight}, sans-serif;
        font-weight: 300;
        font-size: 12px;
        letter-spacing: 0.15em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7) {
          padding-left: 40px;
        }

        &:last-child {
          text-align: right;
        }
        a {
          color: ${props => props.theme.black};
        }
      }
    }
  }

  tr {
    line-height: 4em;

    td {
      text-align: left;
      border-bottom: 1px solid ${props => props.theme.grayLight};
      text-transform: none;
      font-family: ${props => props.theme.sansSerifLight}, sans-serif;
      font-weight: 300;
      font-size: 12px;
      letter-spacing: 0.1em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;

      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        padding-left: 40px;
      }

      &:last-child {
        text-align: right;
      }

      a {
        color: ${props => props.theme.gold};
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 0.15em;
      }
    }
  }
`;

export const AscendingStyled = css`
  display: none;

  ${mediaMin.tabletLandscape` 
  width: 9px;
    height: 5px;
    display: inline-block;
    margin: 0 0 0.15em 0.65em;
    background: url(${sortAscendingPNG}) no-repeat center center;
    background: url(${sortAscendingSVG}) no-repeat center center, none;
    background-size: contain;
    
  `}
`;

export const DescendingStyled = css`
  display: none;

  ${mediaMin.tabletLandscape`
    width: 9px;
    height: 5px;
    display: inline-block;
    margin: 0 0 0.15em 0.65em;;
    background: url(${sortDescendingPNG}) no-repeat center center;
    background: url(${sortDescendingSVG}) no-repeat center center, none;
    background-size: contain;
    
  `}
`;

export const ControlsStyled = css`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;

  ${mediaMin.tabletLandscape` 
    text-align: center;
  `}

  > li {
    display: inline-block;
    width: 100%;
    font-family: ${props => props.theme.serifRoman}, serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.4em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin: 0;

    ${mediaMin.tabletLandscape` 
      width: auto;
    `}

    &:first-child {
      &::after {
        ${mediaMin.tabletLandscape` 
          display: inline-block;
          content: "/";
          margin: 0 1em;
        `}
      }
    }

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
    }
  }
`;

export const FilterButtonStyled = css`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid ${props => props.theme.gray};
  background: ${props => props.theme.white};
  padding: 0.5em 1.25em;
  text-transform: uppercase;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.15em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  z-index: 20;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.white};

    > div {
      display: inline-block;
    }
  }
`;

export const FilterContainer = css`
  display: flex;
  position: absolute;
  top: 1.8em;
  right: 0;
  opacity: 1;
  z-index: 10;
  cursor: pointer;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
`;

export const FilterCategory = css`
  width: 50%;
  padding: 2.5em 2em;
`;

export const FilterLabel = css`
  display: block;
  margin: 0 0 0.5em;
`;

export const FilterList = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;
