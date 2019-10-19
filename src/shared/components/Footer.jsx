import React, { useState, useContext } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components/macro";
import Context from "../../config/Context";
import { Caption } from "../styled-components/Typography.js";
import { FooterWrapper } from "shared/styled-components/Navigation.js";
import parse from "html-react-parser";

const FooterContainer = styled.footer`
  ${FooterWrapper};
`;

const SlideCaption = styled.div`
  ${Caption};
`;

const Footer = props => {
  const { primaryData } = props;
  const context = useContext(Context);
  const {
    setReturnPath,
    navActive,
    isSection,
    isSlide,
    hasCaptions,
    activeCrossFade
  } = context;
  const [isOpen, setIsOpen] = useState(false);

  const declareReturnPath = () => {
    setReturnPath(window.location.pathname);
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
              <SlideCaption
                emptyCaption={
                  primaryData[isSection].slides[isSlide].caption[0] === ""
                }
                isOpen={isOpen}
              >
                <span>{parse(primaryData[isSection].title)}</span>
                {primaryData[isSection].slides[isSlide].caption[0] !== "" && (
                  <button onClick={toggleCaption}>
                    {isOpen ? "Close" : "Info"}
                  </button>
                )}
                <p>
                  {parse(primaryData[isSection].slides[isSlide].caption[0])}
                </p>
              </SlideCaption>
            )}

          {hasCaptions &&
            primaryData[isSection].slides[isSlide].caption.length > 1 && (
              <SlideCaption
                emptyCaption={
                  primaryData[isSection].slides[isSlide].caption[0] === ""
                }
                isOpen={isOpen}
              >
                <span>{parse(primaryData[isSection].title)}</span>
                {primaryData[isSection].slides[isSlide].caption[0] !== "" && (
                  <button onClick={toggleCaption}>
                    {isOpen ? "Close" : "Info"}
                  </button>
                )}
                <p>
                  {parse(
                    primaryData[isSection].slides[isSlide].caption[
                      activeCrossFade - 1
                    ]
                  )}
                </p>
              </SlideCaption>
            )}

          <ul>
            <li>
              <Link onClick={declareReturnPath} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={declareReturnPath} to="/broker-portal">
                Broker Portal
              </Link>
            </li>
            <li>
              <Link onClick={declareReturnPath} to="/legal">
                Legal
              </Link>
            </li>
            <li>
              <Link onClick={declareReturnPath} to="/accessibility">
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
