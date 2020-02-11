import React, { useState, useContext } from 'react';
import { Link, Location } from '@reach/router';
import styled from 'styled-components/macro';
import parse from 'html-react-parser';

import Context from '../../config/Context';
import { FooterWrapper } from 'shared/styled-components/Navigation.js';
import {
  SlideCaption,
  FooterMessage
} from '../styled-components/Typography.js';

const Wrapper = styled.footer`
  ${FooterWrapper};
`;

const Caption = styled.div`
  ${SlideCaption};
`;

const Message = styled.div`
  ${FooterMessage};
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
        <Wrapper
          navActive={navActive}
          isLight={
            location.pathname === '/contact' ||
            location.pathname === '/broker-portal'
          }
        >
          {hasCaptions &&
            primaryData[isSection].slides[isSlide].caption.length === 1 && (
              <Caption
                emptyCaption={
                  primaryData[isSection].slides[isSlide].caption[0] === ''
                }
                isOpen={isOpen}
              >
                <span>{parse(primaryData[isSection].title)}</span>
                {primaryData[isSection].slides[isSlide].caption[0] !== '' && (
                  <button onClick={toggleCaption}>
                    {isOpen ? 'Close' : 'Info'}
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
                  primaryData[isSection].slides[isSlide].caption[0] === ''
                }
                isOpen={isOpen}
              >
                <span>{parse(primaryData[isSection].title)}</span>
                {primaryData[isSection].slides[isSlide].caption[0] !== '' && (
                  <button onClick={toggleCaption}>
                    {isOpen ? 'Close' : 'Info'}
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
          {location.pathname === '/neighborhood' && (
            <Message>
              <Link to="/team">Meet the Team</Link>
            </Message>
          )}
          {location.pathname.includes('team') && (
            <Message>
              <Link to="/availability">Browse the Availability</Link>
            </Message>
          )}
          {location.pathname.includes('availability') && (
            <Message>
              <Link to="/press">Read the Press</Link>
            </Message>
          )}
          {location.pathname === '/press' && (
            <Message>
              <Link to="/gallery">View the Gallery</Link>
            </Message>
          )}
          {location.pathname === '/gallery' && (
            <Message>
              <Link to="/contact">Visit the Sales Gallery</Link>
            </Message>
          )}
          <ul>
            <li>
              <Link onClick={declareReturnPath} to="/availability">
                Availability
              </Link>
            </li>
            <li>
              <a
                href="https://www.dropbox.com/sh/x1p0rgupij26raw/AACeYLqy7-y_axQrTKZpSYJda?dl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Broker Portal
              </a>
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
