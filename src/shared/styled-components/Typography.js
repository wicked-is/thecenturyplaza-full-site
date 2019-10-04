import styled, { css } from "styled-components";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js";

export const PageBody = css`
  font-family: ${props => props.theme.sansSerifRegular}, courier;
  color: ${props => props.theme.black};
  font-size: 14px;
  letter-spacing: 0.6px;
  transition: background 0.25s ease-in-out;
  background: ${props => props.pageColor};
  min-height: 100vh;
  position: relative;

  a {
    ${"" /* color: ${props => props.theme.black}; */}
    text-decoration: none;
  }
`;

export const PageHeader = css`
  header {
    transition: background 0.25s ease-in-out;
    background: ${props => props.pageColor};
  }
`;

export const PageFooter = css`
  position: relative;
  width: 100%;
  height: 80px;
  z-index: 10000;
`;

export const PageTitle = css`
  font-family: ${props => props.theme.serifMedium};
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 6.11px;
`;
