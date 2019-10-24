/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

const ResponsiveImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  opacity: ${props => (props.revealed ? '1' : '0')};
  transition: opacity 1s ease;
`;

const ResponsiveImage = ({
  ariaHidden,
  srcPath,
  imgClass,
  imgAlt,
  onClickProp,
  onLoadProp,
  refProp,
  innerRef,
  reveal
}) => {
  const [revealed, setRevealed] = useState(false);

  const defaultPath = require(`../../imgs/${srcPath}.jpg`);

  const srcSetPaths = {
    '400w': require(`../../imgs/${srcPath}_400.jpg`),
    '800w': require(`../../imgs/${srcPath}_800.jpg`),
    '1100w': require(`../../imgs/${srcPath}_1100.jpg`),
    '1500w': require(`../../imgs/${srcPath}_1500.jpg`),
    '2000w': require(`../../imgs/${srcPath}_2000.jpg`),
    '2500w': require(`../../imgs/${srcPath}_2500.jpg`)
  };

  const srcSet = Object.entries(srcSetPaths)
    .map(([name, path]) => `${path} ${name}`)
    .join(', ');

  return reveal ? (
    <Waypoint
      onEnter={() => {
        setRevealed(true);
      }}
      onLeave={() => {
        setRevealed(false);
      }}
    >
      <ResponsiveImg
        revealed={revealed}
        src={defaultPath}
        srcSet={srcSet}
        alt={imgAlt}
        ref={refProp || innerRef || null}
        className={`responsive-image ${imgClass} `}
        onClick={onClickProp}
        aria-hidden={ariaHidden === undefined ? false : ariaHidden}
        onLoad={onLoadProp}
      />
    </Waypoint>
  ) : (
    <ResponsiveImg
      revealed
      src={defaultPath}
      srcSet={srcSet}
      alt={imgAlt}
      ref={refProp || innerRef || null}
      className={`responsive-image ${imgClass} `}
      onClick={onClickProp}
      aria-hidden={ariaHidden === undefined ? false : ariaHidden}
      onLoad={onLoadProp}
    />
  );
};
export default ResponsiveImage;
