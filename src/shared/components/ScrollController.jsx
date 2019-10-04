import React, { useContext } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import styled from 'styled-components';
import { navigate, Location } from '@reach/router';

import Context from 'config/Context';
import { fadeIn } from 'shared/styled-components/Transitions.js';

const SlideBackwardContainer = styled.span`
  position: absolute;
  left: 0;
  top: 100px;
  display: inline-block;
  width: 100%;
  height: calc(100vh - 200px);
  margin: 0;
  z-index: 600;
`;

const ScrollController = ({
  previousPath,
  nextPath,
  isExpanded,
  closeExpand
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  return (
    <SlideBackwardContainer isExpanded={isExpanded}>
      <ReactScrollWheelHandler
        id="test"
        pauseListeners={pauseScroll}
        upHandler={() => {
          closeExpand();
          navigate(previousPath);
          scrollCooldown();
        }}
        downHandler={() => {
          closeExpand();
          navigate(nextPath);
          scrollCooldown();
        }}
      ></ReactScrollWheelHandler>
    </SlideBackwardContainer>
  );
};
export default ScrollController;
