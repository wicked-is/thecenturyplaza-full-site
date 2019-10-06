/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Context from "../config/Context";

const ContextProvider = props => {
  const [navActive, setNavActive] = useState(false);
  const [pauseScroll, setPauseScroll] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  // const [fixedFooter, setfixedFooter] = useState(false);

  const scrollCooldown = () => {
    setPauseScroll(true);
    setTimeout(() => setPauseScroll(false), 800);
  };

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const markPlayed = () => {
    setHasPlayed(true);
  };

  // const applyFixedFooter = () => {
  //   setfixedFooter(true);
  // };

  // const removeFixedFooter = () => {
  //   setfixedFooter(false);
  // };

  return (
    <Context.Provider
      value={{
        ...props,
        navActive,
        toggleMenu,
        pauseScroll,
        scrollCooldown,
        hasPlayed,
        markPlayed
        // fixedFooter,
        // setfixedFooter,
        // applyFixedFooter,
        // removeFixedFooter
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
