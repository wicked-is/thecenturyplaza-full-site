/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import Context from '../config/Context';

const ContextProvider = props => {
  const [navActive, setNavActive] = useState(false);
  const [pauseScroll, setPauseScroll] = useState(false);

  const scrollCooldown = () => {
    setPauseScroll(true);
    setTimeout(() => setPauseScroll(false), 1000);
  };

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        navActive,
        toggleMenu,
        pauseScroll,
        scrollCooldown
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
