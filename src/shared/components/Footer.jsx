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
  const {
    globalConfig,
    setGlobalConfig,
    navActive,
    isSection,
    isSlide,
    hasCaptions,
    activeCrossFade
  } = context;
  const [isOpen, setIsOpen] = useState(false);

  const setReturnPath = () => {
    setGlobalConfig({
      ...globalConfig,
      returnPath: window.location.pathname
    });
  };

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
          {hasCaptions &&
            primaryData[isSection].slides[isSlide].caption.length === 1 && (
              <SlideCaption isOpen={isOpen}>
                <button onClick={toggleCaption}>
                  {isOpen ? "Close" : "Info"}
                </button>
                <p>
                  {parse(primaryData[isSection].slides[isSlide].caption[0])}
                </p>
              </SlideCaption>
            )}

          {hasCaptions &&
            primaryData[isSection].slides[isSlide].caption.length > 1 && (
              <SlideCaption isOpen={isOpen}>
                <button onClick={toggleCaption}>
                  {isOpen ? "Close" : "Info"}
                </button>
                <p>
                  {parse(
                    primaryData[isSection].slides[isSlide].caption[
                      activeCrossFade - 1
                    ]
                  )}
                </p>
              </SlideCaption>
            )}

          {hasCaptions && (
            <SectionIndicator>
              {parse(primaryData[isSection].title)}
            </SectionIndicator>
          )}

          <ul>
            <li>
              <Link onClick={setReturnPath} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={setReturnPath} to="/broker-portal">
                Broker Portal
              </Link>
            </li>
            <li>
              <Link onClick={setReturnPath} to="/legal">
                Legal
              </Link>
            </li>
            <li>
              <Link onClick={setReturnPath} to="/accessibility">
                Accessibility
              </Link>
            </li>
          </ul>
        </FooterContainer>
      )}
    </Location>
  );
};
export default Footer;
