import React, { useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { Location } from "@reach/router";

import Context from "../../config/Context";
import { FooterWrapper } from "shared/styled-components/Navigation.js";

const FooterContainer = styled.div`
  ${FooterWrapper};
`;

const Footer = props => {
  const context = useContext(Context);
  const { navActive } = context;
  return (
    <Location>
      {({ location }) => (
        <FooterContainer
          navActive={navActive}
          isLight={location.pathname === "/contact"}
        >
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="#">Instagram</Link>
            </li>
            <li>
              <Link to="#">Broker Portal</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
            <li>
              <Link to="/accessibility">Accessibility</Link>
            </li>
          </ul>
        </FooterContainer>
      )}
    </Location>
  );
};
export default Footer;
