
import styled, { css } from 'styled-components';
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const PageBody = css`
  font-family: ${props => props.theme.sansSerifRegular}, courier;
  color: ${props => props.theme.black};
  font-size: 14px;
  letter-spacing: 0.6px;
  transition: background 0.25s linear;
  background: ${props => props.PageColor};
  min-height: 100vh;

  a {
    text-decoration: none;
  }
`

export const PageTitle = css`
  font-family: ${props => props.theme.serifMedium};
  text-align: center;
  text-transform: uppercase; 
  font-size: 22px;
  letter-spacing: 6.11px;

`
