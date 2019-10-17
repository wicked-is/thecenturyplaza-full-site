import React, { useEffect, useContext } from "react";
import { Link } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components";
import Context from "../../config/Context";
import {
  MenuWrapper,
  SecondaryMenuContainerStyled
} from "shared/styled-components/Navigation.js";

const SecondaryMenuWrapper = styled.div`
  ${MenuWrapper};
`;

const SecondaryMenuContainer = styled.nav`
  ${SecondaryMenuContainerStyled};
`;

const SecondaryMenu = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { pauseScroll, triggerExit, setGlobalConfig } = context;

  useEffect(() => {
    setPageColor(props => props.theme.gray);
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: props => props.theme.grayGradient,
      footerBackground: props => props.theme.gray,
      footerDisplay: false,
      footerFixed: false,
      sidebarBackground: "transparent"
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setGlobalConfig({
        headerBackground: "transparent",
        footerBackground: "transparent",
        footerDisplay: false,
        footerFixed: true,
        sidebarBackground: "transparent"
      });
    };
  }, [setGlobalConfig]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        triggerExit("tower/residences/views");
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
