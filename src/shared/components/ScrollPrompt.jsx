import React, { useState, useEffect, useContext } from "react";
import Context from "../../config/Context";
import { Location } from "@reach/router";
import styled from "styled-components";
import {
  showScrollPlease,
  enterFromCenter,
  exitFromCenter
} from "../styled-components/Transitions.js";
import { mediaMin } from "../styled-components/MediaQueries.js";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import primaryData from "Primary/primaryData.json";

const ScrollPromptWrapper = styled.div`
  animation: ${props => props.fadePrompt && exitFromCenter};
  display: ${props => (props.preventScroll ? "flex" : "none")};
  opacity: ${props => (props.preventScroll ? "1" : "0")};
  z-index: ${props => (props.preventScroll ? "999999" : "-1")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

const ScrollPromptMessage = styled.div`
  opacity: 0;
  animation: ${props => props.preventScroll && enterFromCenter};
  will-change: opacity;
  position: relative;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 2555, 0.7);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 42px;
  box-shadow: 0px 0px 80px -30px rgba(0, 0, 0, 0.35);

  ${mediaMin.tabletLandscape`
      margin-bottom: 0;
    `}
`;

const ScrollPromptText = styled.p`
  font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.35em;
  letter-spacing: 0.03em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  text-align: center;
`;

const ScrollPromptIcon = styled.span`
  display: inline-block;
  border: 1px solid ${props => props.theme.black};
  width: 25px;
  height: 45px;
  border-radius: 12px;
  position: relative;

  &::before {
    content: "\u2022";
    font-size: 12px;
    text-align: center;
    width: 27px;
    position: absolute;
    bottom: 2px;
    left: 0;
    animation: ${showScrollPlease};
    will-change: opacity, top;
  }
`;

const ScrollPrompt = ({ isExpanded }) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;
  const [preventScroll, setPreventScroll] = useState(false);
  const [fadePrompt, setFadePrompt] = useState(false);

  const fadeAway = () => {
    scrollCooldown(500);
    setFadePrompt(true);
    setTimeout(() => {
      setPreventScroll(false);
    }, 1000);
  };

  useEffect(() => {
    setPreventScroll(true);
  }, [setPreventScroll]);

  return (
    <Location>
      {({ location }) =>
        (location.pathname.includes(primaryData[0].slug) ||
          location.pathname.includes(primaryData[1].slug) ||
          location.pathname.includes(primaryData[2].slug) ||
          location.pathname.includes(primaryData[3].slug)) &&
        (!isExpanded && (
          <ReactScrollWheelHandler
            pauseListeners={pauseScroll}
            upHandler={() => {
              fadeAway();
            }}
            downHandler={() => {
              fadeAway();
            }}
          >
            <ScrollPromptWrapper
              preventScroll={preventScroll}
              fadePrompt={fadePrompt}
            >
              <ScrollPromptMessage preventScroll={preventScroll}>
                <ScrollPromptText>
                  Scroll or Swipe
                  <br />
                  to Navigate
                </ScrollPromptText>
                <ScrollPromptIcon />
              </ScrollPromptMessage>
            </ScrollPromptWrapper>
          </ReactScrollWheelHandler>
        ))
      }
    </Location>
  );
};

export default ScrollPrompt;
