import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import { Router } from "@reach/router";
import styled from "styled-components";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import BuidlingContainer from "./components/Building.jsx";

const AmenitiesWrapper = styled.div`
  ${Wrapper};
`;

const Amenities = props => {
  const { amenitiesData, setPageColor } = props;

  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "#E7E7E7";
    setPageColor(props => props.theme.grayLight);
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: props => props.theme.grayLightGradient,
      footerBackground: props => props.theme.grayLight,
      footerDisplay: false,
      footerFixed: false,
      sidebarBackground: "transparent"
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "#FFFFFF";
      setGlobalConfig({
        headerBackground: "transparent",
        footerBackground: "transparent",
        footerDisplay: false,
        footerFixed: true,
        sidebarBackground: "transparent"
      });
    };
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setReturnPath(null);
    };
  }, [setReturnPath]);

  return (
    <AmenitiesWrapper amenitiesData={amenitiesData}>
      <Router>
        {amenitiesData.map((building, index) => (
          <BuidlingContainer
            key="index"
            path={building.slug}
            building={building}
            default={index === 0 && true}
          />
        ))}
      </Router>
    </AmenitiesWrapper>
  );
};

export default Amenities;
