import React, { useEffect, useContext } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import { Wrapper } from "shared/styled-components/Layouts.js";
import Context from "config/Context";
import BuidlingContainer from "./components/Building.jsx";

const AmenitiesWrapper = styled.div`
  ${Wrapper};
`;
const Amenities = props => {
  const { setPageColor, amenitiesData } = props;
  const context = useContext(Context);
  const { setHasCaptions } = context;

  useEffect(() => {
    setHasCaptions(false);
    setPageColor(props => props.theme.gray);
  }, [setPageColor, setHasCaptions]);

  return (
    <AmenitiesWrapper amenitiesData={amenitiesData}>
      <Router>
        {amenitiesData.map((building, index) => (
          <BuidlingContainer
            key="index"
            path={building.slug}
            building={building}
          />
        ))}
      </Router>
    </AmenitiesWrapper>
  );
};

export default Amenities;
