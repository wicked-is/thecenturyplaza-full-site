import { css } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { fadeIn } from "shared/styled-components/Transitions.js";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"


export const MenuWrapper = css`
  ${Wrapper}
  height: calc(100vh - 160px);
  align-items: center;
`
export const MenuContainer = css`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  margin: 0;

  ul {
    list-style: none;
    margin: 0 0 80px;
    padding: 0;
    height: auto;

    li {
      margin: 0 0 20px;

      a {
        font-family: ${props => props.theme.sansSerifThin};
        font-size: 40px;
        letter-spacing: 1.5px;
        color:${props => props.theme.white};

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  > a {
    font-family: ${ props => props.theme.sansSerifLight};
    color: ${ props => props.theme.black};

    &:hover {
      opacity: 0.5;
    }
  }
}
`

export const FooterWrapper = css`
  display: inline-block;
  position: absolute;
  bottom: 30px;
  right: 40px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 0 0 20px;

      a{
        color: ${props => props.theme.gray};

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`