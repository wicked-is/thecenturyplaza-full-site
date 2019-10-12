import React, { useEffect } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import BuidlingContainer from "./components/Building.jsx";

const AmenitiesWrapper = styled.div`
  ${Wrapper};
`;
const Amenities = props => {
  const { setPageColor, amenitiesData } = props;

  useEffect(() => {
    setPageColor(props => props.theme.grayLight);
  }, [setPageColor]);

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
