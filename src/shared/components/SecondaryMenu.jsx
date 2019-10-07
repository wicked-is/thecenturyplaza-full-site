import React, { useEffect, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import {
  MenuWrapper,
  MenuContainer
} from "shared/styled-components/Navigation.js";
import Context from "config/Context";

const SecondaryMenuWrapper = styled.div`
  ${MenuWrapper};
`;
const SecondaryMenuContainer = styled.nav`
  ${MenuContainer};
`;

const SecondaryMenu = props => {
  const context = useContext(Context);
  const { setHasCaptions } = context;
  const { setPageColor } = props;

  useEffect(() => {
    setHasCaptions(false);
    setPageColor(props => props.theme.gray);
  }, [setPageColor, setHasCaptions]);

  return (
    <SecondaryMenuWrapper>
      <SecondaryMenuContainer>
        <ul>
          <li>
            <Link to="/neighborhood">Explore the Neighborhood</Link>
          </li>
          <li>
            <Link to="/team">Meet the Team</Link>
          </li>
          <li>
            <Link to="/availability">Browse the Availability</Link>
          </li>
          <li>
            <Link to="/press">Read the Press</Link>
          </li>
          <li>
            <Link to="/gallery">Visit the Sales Gallery</Link>
          </li>
        </ul>
        <Link to="/">Return Home</Link>
      </SecondaryMenuContainer>
    </SecondaryMenuWrapper>
  );
};

export default SecondaryMenu;
