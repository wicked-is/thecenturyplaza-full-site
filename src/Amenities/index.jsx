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
  const { globalConfig, setGlobalConfig } = context;

  useEffect(() => {
    setPageColor(props => props.theme.grayLight);
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      ...globalConfig,
      headerBackground: props => props.theme.grayLightGradient,
      pageBackground: props => props.theme.grayLight,
      footerBackground: props => props.theme.grayLight,
      footerDisplay: false
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setGlobalConfig({
        ...globalConfig,
        headerBackground: "white",
        pageBackground: "white",
        footerBackground: "white",
        returnPath: null
      });
    };
  }, [setGlobalConfig]);

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
