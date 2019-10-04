import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PhotoSphereViewer from 'photo-sphere-viewer';
import parse from 'html-react-parser';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { navigate } from '@reach/router';

import Context from '../../config/Context';
import { SlideContainerStyled, PanoFullStyled } from 'Primary/style.js';
import SlideForward from 'shared/components/SlideForward.jsx';
import SlideBackward from 'shared/components/SlideBackward.jsx';

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
const ImageFull = styled.div`
  ${PanoFullStyled};
`;

const PanoViewer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  .psv-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    .psv-hud {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: absolute;
    }
  }
  .psv-loader-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .psv-loader {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        margin: 0 auto;
      }

      .psv-loader-canvas {
        display: none;
      }
    }
  }
`;

const PanoramaSlide = ({
  slide,
  nextPath,
  previousPath,
  closeExpand,
  location
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  const setUpPanorama = () => {
    new PhotoSphereViewer({
      container: 'panorama',
      panorama: require('../../imgs/panorama/pano_10000.jpg'),
      navbar: false,
      anim_speed: 0,
      default_lat: 0,
      latitude_range: [0.3, -0.3],
      max_fov: 38
    });
  };

  useEffect(() => {
    setUpPanorama();
  }, []);

  return (
    <ReactScrollWheelHandler
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
    >
      <SlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        <ImageFull>
          <PanoViewer id="panorama" />
        </ImageFull>
        <p>{parse(slide.caption)}</p>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default PanoramaSlide;
