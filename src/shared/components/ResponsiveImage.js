/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ResponsiveImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ResponsiveImage = ({
  ariaHidden,
  srcPath,
  imgClass,
  imgAlt,
  onClickProp,
  onLoadProp,
  refProp,
}) => {

  const defaultPath = require(`../../imgs/${srcPath}.jpg`);

  const srcSetPaths = {
    '400w': require(`../../imgs/${srcPath}_400.jpg`),
    '800w': require(`../../imgs/${srcPath}_800.jpg`),
    '1100w': require(`../../imgs/${srcPath}_1100.jpg`),
    '1500w': require(`../../imgs/${srcPath}_1500.jpg`),
    '2000w': require(`../../imgs/${srcPath}_2000.jpg`),
    '2500w': require(`../../imgs/${srcPath}_2500.jpg`)
  };

  const srcSet = Object.entries(srcSetPaths).map(([name, path]) => `${path} ${name}`).join(', ');

  console.log(srcSet)

  return (
    <ResponsiveImg
      src={defaultPath}
      srcSet={srcSet}
      alt={imgAlt}
      ref={refProp || null}
      className={`responsive - image ${imgClass} `}
      onClick={onClickProp}
      aria-hidden={ariaHidden === undefined ? false : ariaHidden}
      onLoad={onLoadProp}
    />
  );
};
export default ResponsiveImage;