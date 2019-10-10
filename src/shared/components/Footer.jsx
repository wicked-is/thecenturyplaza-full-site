import React, { useContext } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components";
import Context from "../../config/Context";
import { Caption } from "../styled-components/Typography.js";
import { FooterWrapper } from "shared/styled-components/Navigation.js";
import parse from "html-react-parser";

const FooterContainer = styled.footer`
  ${FooterWrapper};
`;

const SlideCaption = styled.p`
  ${Caption};
`;

const Footer = props => {
  const { primaryData } = props;
  const context = useContext(Context);
  const { navActive, isSection, isSlide, hasCaptions } = context;

  return (
    <Location>
      {({ location }) => (
        <FooterContainer
          navActive={navActive}
          isLight={
            location.pathname === "/contact" ||
            location.pathname === "/broker-portal"
          }
        >
          {hasCaptions && (
            <SlideCaption>
              {parse(primaryData[isSection].slides[isSlide].caption)}
            </SlideCaption>
          )}

          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/broker-portal">Broker Portal</Link>
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
