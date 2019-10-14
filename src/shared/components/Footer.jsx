import React, { useState, useContext } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components";
import Context from "../../config/Context";
import { Caption, Indicator } from "../styled-components/Typography.js";
import { FooterWrapper } from "shared/styled-components/Navigation.js";
import parse from "html-react-parser";

const FooterContainer = styled.footer`
  ${FooterWrapper};
`;

const SlideCaption = styled.div`
  ${Caption};
`;

const SectionIndicator = styled.div`
  ${Indicator};
`;

const Footer = props => {
  const { primaryData } = props;
  const context = useContext(Context);
  const { navActive, isSection, isSlide, hasCaptions } = context;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCaption = () => {
    setIsOpen(!isOpen);
  };

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
          {hasCaptions && primaryData[isSection].slides[isSlide].caption[0] && (
            <SlideCaption isOpen={isOpen}>
              <button onClick={toggleCaption}>
                {isOpen ? "Close" : "Info"}
              </button>
              <p>{parse(primaryData[isSection].slides[isSlide].caption[0])}</p>
            </SlideCaption>
          )}

          {hasCaptions && (
            <SectionIndicator>
              {parse(primaryData[isSection].title)}
            </SectionIndicator>
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
