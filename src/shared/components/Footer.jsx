import React, { useState, useContext } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components/macro";
import parse from "html-react-parser";

import Context from "../../config/Context";
import { FooterWrapper } from "shared/styled-components/Navigation.js";
import {
  SlideCaption,
  FooterMessage,
} from "../styled-components/Typography.js";

import iconFB from "icons/social/icon-fb.svg";
import iconIG from "icons/social/icon-ig.svg";
import iconTW from "icons/social/icon-tw.svg";

const Wrapper = styled.footer`
  ${FooterWrapper};
`;

const Caption = styled.div`
  ${SlideCaption};
`;

const Message = styled.div`
  ${FooterMessage};
`;

const SocialIcon = styled.li`
  position: relative;
  width: 20px;
  height: 17px;
  a {
    display: block;
    position: absolute;
    top: 15%;
    left: 0;
  }
  img {
    filter: invert(100%);
    width: 20px;
  }
`;

const Footer = (props) => {
  const { primaryData } = props;
  const context = useContext(Context);
  const {
    setReturnPath,
    navActive,
    isSection,
    isSlide,
    hasCaptions,
    activeCrossFade,
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
        <Wrapper
          navActive={navActive}
          isLight={
            location.pathname === "/contact" ||
            location.pathname === "/broker-portal"
          }
        >
          {hasCaptions &&
            primaryData[isSection].slides[isSlide].caption.length === 1 && (
              <Caption
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
              </Caption>
            )}

          {hasCaptions &&
            primaryData[isSection].slides[isSlide].caption.length > 1 && (
              <Caption
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
              </Caption>
            )}
          {/* {location.pathname === '/neighborhood' && (
            <Message>
              <Link to="/team">Meet the Team</Link>
            </Message>
          )} */}
          {location.pathname.includes("team") && (
            <Message>
              <Link to="/availability/park-elm">Browse the Availability</Link>
            </Message>
          )}
          {location.pathname.includes("availability") && (
            <>
              <Caption emptyCaption={false} isOpen={isOpen}>
                <span>&npsp;</span>
                <button onClick={toggleCaption}>
                  {isOpen ? "Close" : "Info"}
                </button>
                <p>
                  {parse(
                    "FAIRMONT CENTURY PLAZA RESIDENCES MOVE IN READY<br />TOWER ESTATE RESIDENCES ANTICIPATED OPENING SPRING 2022"
                  )}
                </p>
              </Caption>
              <Message>
                <Link to="/press">Read the Press</Link>
              </Message>
            </>
          )}
          {location.pathname === "/press" && (
            <Message>
              <Link to="/gallery">View the Gallery</Link>
            </Message>
          )}
          {location.pathname === "/gallery" && (
            <Message>
              <Link to="/contact">Visit the Sales Gallery</Link>
            </Message>
          )}
          <ul>
            <SocialIcon>
              <a
                href="https://www.instagram.com/thecenturyplaza/"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <img src={iconIG} alt="Instagram" />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.facebook.com/thecenturyplaza/"
                target="_blank"
                title="Facbook"
                rel="noopener noreferrer"
              >
                <img src={iconFB} alt="Facebook" />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://twitter.com/thecenturyplaza"
                target="_blank"
                title="Twitter"
                rel="noopener noreferrer"
              >
                <img src={iconTW} alt="Twitter" />
              </a>
            </SocialIcon>
            <li>
              <Link onClick={declareReturnPath} to="/availability">
                Availability
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
        </Wrapper>
      )}
    </Location>
  );
};
export default Footer;
