import { css } from 'styled-components';
import { Container } from '../shared/styled-components/Layouts.js';
import { mediaMin } from '../shared/styled-components/MediaQueries.js';
import sortAscendingSVG from 'icons/sort-ascending.svg';
import sortDescendingSVG from 'icons/sort-descending.svg';
import checkboxIconSVG from 'icons/checkbox-icon.svg';
import checkedIconSVG from 'icons/checked-icon.svg';

export const ContainerStyled = css`
  ${Container}
  width: 100%;

  ${mediaMin.tabletLandscape` 
    width: ${props => parseFloat(props.theme.desktopColumn) * 10}vw;
  `}
`;

export const HeaderStyled = css`
  width: 100%;
  margin: 0 0 2em;

  ${mediaMin.tabletLandscape` 
    margin: 0 0 3em;
  `}

  p {
    text-align: left;
    margin: 0 0 0.5em;
    text-transform: uppercase;
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    ${mediaMin.tabletLandscape` 
      text-align: center;
      text-transform: none;
      font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
      letter-spacing: 0.035em;

      &::after {
        display: none;
      }

      &::after {
        display: inline-block;
        content: "Availability List";
        margin: 0 0 0 0.4em; 
      }
    `}
  }
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
    width: auto;
    font-family: ${props => props.theme.serifRoman}, serif;
    font-weight: 300;
    font-size: 19px;
    line-height: 1.4em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin: 0;

    ${mediaMin.phoneXL` 
      font-size: 24px;
    `}

    ${mediaMin.tabletLandscape` 
      font-size: 22px;
    `}

    ${mediaMin.desktop` 
      font-size: 24px;
    `}

    &:first-child {
      &::after {
        display: inline-block;
        content: "/";
        margin: 0 0.5em;
      }
    }

    span {
      display: none;

      ${mediaMin.tabletLandscape`
        display: inline-block; 
      `}
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
    ${props => (props.active ? 'white' : props.theme.gray)};

  ${mediaMin.tabletLandscape` 
      top: 0;
    `}
`;

export const FilterContainer = css`
  display: flex;
  position: absolute;
  align-items: flex-start;
  top: 0.45em;
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
  width: 48%;
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

  input[type='checkbox'] {
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
      content: '';
      height: 16px;
      width: 16px;
      margin: 0 1em 0 0;
      border: 0;
      background: url(${checkboxIconSVG}) no-repeat center center;
    }
  }

  input[type='checkbox']:checked + label {
    &::before {
      background: url(${checkedIconSVG}) no-repeat center center;
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

export const TableStyled = css`
  width: 100%;
  border-top: 1px solid ${props => props.theme.grayLight};

  ${mediaMin.tablet` 
    table-layout: fixed;
    border-top: 0;
  `}

  thead {
    display: none;

    ${mediaMin.tablet` 
      display: table-header-group;
    `}

    tr {
      th {
        text-align: left;
        border-bottom: 1px solid ${props => props.theme.grayLight};
        text-transform: uppercase;
        font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
        font-weight: 300;
        font-size: 12px;
        line-height: 1.2em;
        padding: 0 0 1.5em;
        letter-spacing: 0.15em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        &:nth-child(3) {
          ${mediaMin.tablet` 
            padding: 0 1.75em 1.5em 2em;
          `}

          ${mediaMin.tabletLandscape` 
            padding: 0 2em 1.5em 2em;
          `}

          ${mediaMin.desktopSmall` 
            padding: 0 0.5em 1.5em 1em;
          `}

        }

        &:nth-child(4) {
          ${mediaMin.tabletLandscape` 
            padding: 0 2em 1.5em 0;
          `}

          ${mediaMin.desktopSmall` 
            padding: 0 2.5em 1.5em 0;
          `}      

          ${mediaMin.desktop` 
            padding: 0 0 1.5em 0;
          `}

          .units {
            display: block;
            white-space: nowrap;

            ${mediaMin.tablet` 
              display: inline-block;
            `}

            ${mediaMin.desktop` 
              padding: 0 0 0 0.5em;
            `}
          }
        }

        &:nth-child(5) {
          ${mediaMin.tablet` 
            padding: 0 0 1.5em 2em;
          `}

          ${mediaMin.desktopSmall` 
            text-align: left;
            padding-left: 35px;
          `}
        }

        &:nth-child(6) {
          ${mediaMin.desktopSmall` 
            padding-left: 10px;
          `}
        }

        &:nth-child(7) {
          ${mediaMin.desktop` 
            &::before {
              content: "Interior";
              display: inline-block;
              padding-right: 0.5em;
            }
          `}
        }

        &:nth-child(8) {
          ${mediaMin.tablet` 
            text-align: right;
          `}
        }

        > span {
          cursor: pointer;
        }
      }
    }
  }

  tbody {
    tr {
      display: inline-block;
      border-bottom: 1px solid ${props => props.theme.grayLight};
      width: 100%;
      padding: 2em 0;
      position: relative;

      ${mediaMin.phoneXL` 
        padding: 2em 0 1em;
      `}

      ${mediaMin.tablet` 
        display: table-row;
        border-bottom: 0;
        width: auto;
        margin: 2em 0;
        padding: 0;
      `}

      &:last-child {
        border-bottom: 0;
        td {
          ${mediaMin.tablet`
            border-bottom: 0;
         `}
        }
      }

      td {
        display: inline-block;
        text-align: left;
        border-bottom: 0;
        text-transform: none;
        font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
        font-weight: 300;
        font-size: 12px;
        letter-spacing: 0.1em;
        width: 48%;
        margin: 0 0 1em;
        line-height: 1.2em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        ${mediaMin.phoneXL`
          width: 24%;
        `}

        ${mediaMin.tablet` 
          width: auto:
          margin: 0;
          display: table-cell;
          border-bottom: 1px solid ${props => props.theme.grayLight};
          line-height: 1.6em;
        `}


        .mobile-label {
          text-transform: uppercase;

          ${mediaMin.tablet` 
            display: none;
          `}
        }

        .mobile-unit {
          text-transform: uppercase;
          padding: 0 0 0 0.5em;

          ${mediaMin.tablet` 
            display: none;
          `}
        }

        .mobile-group {
          width: 100%;
          display: inline-block;

          ${mediaMin.tablet` 
            width: auto;
          `}
        }

        .desktop-label {
          display: none;

          ${mediaMin.tablet` 
            display: inline-block;
            padding: 0 0.25em;
          `}
        }

        &:nth-child(1) {
          font-family: ${props => props.theme.sansSerifMedium}, sans-serif;
          font-weight: 500;
          display: block;
          width: 100%;

          ${mediaMin.phoneXL`
             display: inline-block;
            width: 24%;
            vertical-align: top;
          `}


          ${mediaMin.tablet` 
            display: table-cell;
            font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
            font-weight: 300;
            padding: 2em 0;
            width: auto;
          `}

          .mobile-label {
            padding: 0 0.5em 0 0;
          }
        } 

        &:nth-child(2) {

          .mobile-label {
            display: inline-block;
            width: 100%;

            ${mediaMin.tablet` 
              display: none;
            `}
          }
        }

        &:nth-child(3) {

          ${mediaMin.tablet` 
            padding: 0 1em 0 2em;
          `}

          ${mediaMin.tabletLandscape` 
            padding: 0 2em 0;
          `}

          ${mediaMin.desktopSmall` 
             padding: 0 0.5em 0 1em;
          `}
        }

        &:nth-child(4) {
          
          ${mediaMin.tabletLandscape` 
            padding: 0 2em 0 0;
          `}

          .mobile-label {
            display: inline-block;
            width: 100%;

            ${mediaMin.tablet` 
              display: none;
            `}            
          }
        }

        &:nth-child(5) {
          ${mediaMin.phoneXL` 
            margin: 0 0 1em 24%;
          `}

          ${mediaMin.tablet` 
            padding: 0 2em;
            word-spacing: 100vw;
          `}

          ${mediaMin.desktopSmall` 
            padding-left: 35px;
            text-align: left;
          `}

          ${mediaMin.desktopSmall` 
          word-spacing: 0;
          `}

          .mobile-label {
            display: inline-block;
            width: 100%;

            ${mediaMin.tablet` 
              display: none;
            `}            
          }
        }

        &:nth-child(6) {

          ${mediaMin.desktopSmall` 
            padding-left: 10px;
          `}

          .mobile-label {
            display: inline-block;
            width: 100%;

            ${mediaMin.tablet` 
              display: none;
            `}            
          }
        }

        &:nth-child(7) {
          
          .mobile-label {
            display: inline-block;
            width: 100%;

            ${mediaMin.tablet` 
              display: none;
            `}
          }
        }

        &:nth-child(8) {
          margin: 0 0 0 48%;
  
          ${mediaMin.phoneXL`
            display: inline-block;
            width: 24%;
            margin: 0;
            position: absolute;
            left: 0;
            bottom: 2.5em;
          `}

          ${mediaMin.tablet` 
            position: relative;
            bottom: auto;
            left: auto;
            width: auto;
            text-align: right;
            display: table-cell;
          `}
          
          .mobile-label {
            display: inline-block;
            width: 100%;

            ${mediaMin.tablet` 
              display: none;
            `}
          }
        }

        a {
          color: ${props => props.theme.gold};
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.15em;
        }
      }
    }
  }
`;
