/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Context from '../config/Context';
import { navigate } from '@reach/router';

const parsePress = pressData => {
  return pressData
    .map(el => {
      el.acf.id = el.id;
      return el.acf;
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
};

const ContextProvider = props => {
  const [navActive, setNavActive] = useState(false);
  const [pauseScroll, setPauseScroll] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isExisting, setIsExisting] = useState(false);
  const [pressItems, setPressItems] = useState([]);
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

  const triggerExit = path => {
    setIsExisting(true);
    setTimeout(() => {
      scrollCooldown();
      setIsExisting(false);
      navigate(path);
    }, 750);
  };

  // const applyFixedFooter = () => {
  //   setfixedFooter(true);
  // };

  // const removeFixedFooter = () => {
  //   setfixedFooter(false);
  // };

  const fetchPress = async () => {
    console.log('Fetching Press');
    try {
      const pressData = await fetch(
        'https://cms.dbox.com/wp-json/wp/v2/cp_press?per_page=100'
      );
      const pressItems = await pressData.json();
      console.log(parsePress(pressItems));
      setPressItems(parsePress(pressItems));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Context.Provider
      value={{
        ...props,
        navActive,
        toggleMenu,
        pauseScroll,
        scrollCooldown,
        hasPlayed,
        markPlayed,
        isExisting,
        setIsExisting,
        triggerExit,
        pressItems,
        fetchPress
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
