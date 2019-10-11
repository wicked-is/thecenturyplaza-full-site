import { css } from "styled-components";
import { Container } from "../shared/styled-components/Layouts.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";
import sortAscendingSVG from "icons/sort-ascending.svg";
import sortDescendingSVG from "icons/sort-descending.svg";
import checkboxIconSVG from "icons/checkbox-icon.svg";
import checkedIconSVG from "icons/checked-icon.svg";

export const ContainerStyled = css`
  ${Container}
  width: ${props => parseFloat(props.theme.mobileColumn) * 12}vw;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 10}vw;
    margin: 40px 0 0;
  `}
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
        line-height: 1.2em;

        letter-spacing: 0.15em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        &:nth-child(5) {
          padding-left: 35px;
        }

        &:nth-child(6) {
          padding-left: 10px;
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

      &:nth-child(5) {
        padding-left: 35px;
      }

      &:nth-child(6) {
        padding-left: 10px;
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
    background: url(${sortAscendingSVG}) no-repeat center center;
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
    background: url(${sortDescendingSVG}) no-repeat center center;
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
  top: -2em;
  right: 0;
  border: 1px solid ${props => props.theme.gray};
  background: white;
  padding: 0.65em 1.25em 0.5em;
  text-transform: uppercase;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.4em;
  letter-spacing: 0.15em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  z-index: 20;

  &:focus {
    outline: none;
  }

  border-bottom: 1px solid
    ${props => (props.active ? "white" : props.theme.gray)};

  ${mediaMin.tabletLandscape` 
      top: 0;
    `}
`;

export const FilterContainer = css`
  display: flex;
  position: absolute;
  align-items: flex-start;
  top: 0.5em;
  padding: 0 0.5em 0 2em;
  right: 0;
  opacity: 1;
  z-index: 10;
  cursor: pointer;
  background: white;
  border: 1px solid ${props => props.theme.gray};

  ${mediaMin.tabletLandscape` 
    top: 30.8px;
    `}
`;

export const FilterCategory = css`
  width: 50%;
  padding: 2.5em 0.25em 2.5em 0.25em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const FilterCategoryLabel = css`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${props => props.theme.sansSerifLight}, sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.4em;
  letter-spacing: 0.15em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
`;

export const FilterList = css`
  list-style: none;
  margin: 0 0 0 1.5em;
  padding: 0;

  li {
    text-align: left;
    margin: 0 0 0.5em;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  label {
    line-height: 1.5em;
    position: relative;
    text-align: left;
    font-family: ${props => props.theme.sansSerifLight}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &::before {
      position: absolute;
      left: -2.25em;
      top: 0;
      display: inline-block;
      content: "";
      height: 16px;
      width: 16px;
      margin: 0 1em 0 0;
      border: 0;
      background: url(${checkboxIconSVG}) no-repeat center center;
    }
  }

  input[type="checkbox"]:checked + label {
    &::before {
      background: url(${checkedIconSVG}) no-repeat center center;
    }
  }
`;
