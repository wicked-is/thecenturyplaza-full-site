import React, { useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { Location } from "@reach/router";
import Context from "../../config/Context";
import { Caption } from "shared/styled-components/Typography.js";
import { FooterWrapper } from "shared/styled-components/Navigation.js";

const FooterContainer = styled.footer`
  ${FooterWrapper};
`;

const SlideCaption = styled.p`
  ${Caption};
`;

const Footer = props => {
  const { primaryData } = props;
  const context = useContext(Context);
  const { navActive } = context;
  return (
    <Location>
      {({ location }) => (
        <FooterContainer
          navActive={navActive}
          isLight={location.pathname === "/contact"}
        >
          <SlideCaption>{primaryData[0].slides[0].caption}</SlideCaption>
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
