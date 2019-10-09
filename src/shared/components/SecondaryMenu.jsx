import React, { useEffect, useContext } from "react";
import { navigate, Link } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components";
import {
  MenuWrapper,
  SecondaryMenuMenuContainerStyled
} from "shared/styled-components/Navigation.js";
import Context from "config/Context";

const SecondaryMenuWrapper = styled.div`
  ${MenuWrapper};
`;

const SecondaryMenuContainer = styled.nav`
  ${SecondaryMenuMenuContainerStyled};
`;

const SecondaryMenu = props => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown, setHasCaptions } = context;
  const { setPageColor } = props;

  useEffect(() => {
    setHasCaptions(false);
    setPageColor(props => props.theme.gray);
  }, [setPageColor, setHasCaptions]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        navigate("tower/residences/views");
        scrollCooldown();
      }}
    >
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
          <span>
            <Link to="/">Return Home</Link>
          </span>
        </SecondaryMenuContainer>
      </SecondaryMenuWrapper>
    </ReactScrollWheelHandler>
  );
};

export default SecondaryMenu;
