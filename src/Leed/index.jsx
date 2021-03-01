import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components/macro";
import { PageTitle } from "shared/styled-components/Typography.js";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Leed/style.js";
import logoBlackSVG from 'icons/logo-black.svg';

const LeedWrapper = styled.div`
  ${Wrapper};
`;
const LeedContainer = styled.div`
  ${ContainerStyled};
`;
const LeedTitle = styled.h1`
  ${PageTitle};
  text-align: center;
`;

const LeedHeaderLogo = styled.div`
  width: 100%;
  height: 16px;
  z-index: 11000;
  background: url(${logoBlackSVG}) no-repeat center center, none;
`;

const LeedColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  >* {
    min-width: 320px;
    flex: 0 0 45%;
  }
`;

const Leed = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath, navActive } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "#E7E7E7";
    setPageColor("#E7E7E7");
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
    <LeedWrapper navActive={navActive}>
      <LeedContainer navActive={navActive}>
        <LeedTitle>SELECT SUSTAINABLE FEATURES & STRATEGIES</LeedTitle>
        <LeedTitle><LeedHeaderLogo /></LeedTitle>
        <p>
          Century Plaza is registered with the US Green Building Council’s LEED®
          green building program, which is the preeminent third-party program
          used for validating holistic integration of sustainable strategy in
          the design, construction, and operation of the built environment.
          Through passive and active means, the property embraces an ethos by
          which health, environmental conservation, and restoration are paramount.
        </p>
        <p>
          A few notable features and strategies are indicated below.
        </p>

        <LeedColumns>
          <div>
            <h4>SMART LOCATION & TRANSIT CONNECTION</h4>
            <p>
              Ecological studies were conducted to establish criteria for protecting
              existing wildlife and watersheds from impact.
            </p>
            <p>
              This neighborhood-revitalization project enhanced an existing downtown
              urban block, activating community and commerce while minimizing its carbon
              footprint and associated environmental impacts.
            </p>
            <p>
              Site restoration practices rehabilitated ground and soil conditions back
              to their natural states.
            </p>
            <p>
              The property’s location provides direct access to mass transit, taking
              passengers to more than 1,000 daily destination options.
            </p>
          </div>

          <div>
            <h4>GREEN INFRASTRUCTURE & BUILDINGS</h4>
            <p>
              Ecological studies were conducted to establish criteria for protecting existing wildlife and watersheds from impact.
            </p>
            <p>
              Through historical resource preservation, 94% of the existing hotel structure was restored and refreshed, resulting in a similar savings of greenhouse gas emissions.
            </p>
            <p>
              Highly reflective surfaces redirect the sun’s energy away from site, reducing the
            </p>
            <p>
              “heat island” effect.
            </p>
            <p>
              Operational waste is reduced through onsite composting, e-waste recycling, and hazardous waste collection (such as batteries and paint).
            </p>
            <p>
              During construction, 95% of all debris were diverted from the landfill.
            </p>
          </div>

          <div>
            <h4>NEIGHBORHOOD PATTERN & DESIGN</h4>
            <p>
              Designed for walkability, the site features paseos, plazas, parkland, and activated facades.
            </p>
            <p>
              Ultra-wide sidewalks allow for simultaneous window browsing, Instagrammable point-and- click opportunities, as well as social distancing.
            </p>
            <p>
              Ideally situated within walking distance to an extensive number of amenities including restaurants, entertainment venues, grocers, and neighborhood essentials.
            </p>
            <p>
              Century Plaza is a connected community featuring contiguous pedestrian intersections that provide access to passive-use spaces and outdoor recreation zones.
            </p>
          </div>

          <div>
            <h4>INNOVATIONS & DESIGN</h4>
            <p>
              Property-wide lighting design features 100% mercury-free lamps.
            </p>
            <p>
              An on-site educational program supports awareness of sustainable building design.
            </p>
            <p>
              Residential units feature Universal Design strategies, allowing individuals with any disability to effortlessly experience the property.
            </p>
            <p>
              Retail Pavilions feature high performance glazing, reducing solar heat gain and related energy demands to heat or cool the buildings.
            </p>
          </div>
        </LeedColumns>
      </LeedContainer>
    </LeedWrapper>
  );
};

export default Leed;
