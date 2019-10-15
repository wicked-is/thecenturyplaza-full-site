import { css } from "styled-components";
import { Container } from "../shared/styled-components/Layouts.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";

export const ContainerStyled = css`
  ${Container}
  width: 100%;
  display: flex;
  flex-direction: column;

  ${mediaMin.tabletLandscape` 
   flex-direction: row;
  `}
`;
