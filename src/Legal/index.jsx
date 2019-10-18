import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components";
import { PageTitle } from "shared/styled-components/Typography.js";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Legal/style.js";

const LegalWrapper = styled.div`
  ${Wrapper};
`;
const LegalContainer = styled.div`
  ${ContainerStyled};
`;
const LegalTitle = styled.h1`
  ${PageTitle};
`;

const Legal = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath, navActive } = context;

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
    <LegalWrapper navActive={navActive}>
      <LegalContainer>
        <LegalTitle>Disclosures</LegalTitle>
        <p>
          Fairmont Century Plaza Residences (the “Residences”) is not owned,
          developed, or sold by Fairmont, AccorHotels or their affiliates. Next
          Century Partners, LLC, a Delaware limited liability company (the
          “Developer”), is independently owned and operated and is solely
          responsible for the ownership, development, marketing, sale and
          operation of the Residences. The Developer uses the Fairmont brand
          name and certain Fairmont trademarks pursuant to a limited,
          non-exclusive, non-transferable and non-sublicensable license from
          Accor Management US Inc., a Delaware corporation. Under certain
          circumstances, the license may be terminated or revoked according to
          its terms in which case the Residences will not be identified as a
          Fairmont branded project or have any rights to use the Fairmont
          trademarks. Fairmont does not make any representations or guarantees
          with respect to the Residences and is not responsible for the
          Developer’s marketing practices, advertising, and sales
          representations.
        </p>
        <p>
          All images are artist renderings for illustration purposes only and
          are not indicative of the actual and/or final finishes which will be
          contained within the project and the Residences. All dimensions and
          square footages are approximate. No federal agency has judged the
          merits or value, if any, of this property. Nothing contained herein
          shall be construed as an offer to sell or a solicitation to buy in any
          state where prior registration is required. Prices, plans, products
          and availability are subject to change without notice. Availability of
          certain amenities is not assured, and may require a separate agreement
          and payment of additional fees. The Developer reserves the right to
          make modifications in materials, specifications, plans, pricing,
          various fees, designs, scheduling and delivery of the Residences
          without prior notice. Exclusive sales and marketing on behalf of the
          Developer: Next Century Realty, Inc., BRE #02028123. Equal Housing
          Opportunity.
        </p>
        <h4>CREDITS</h4>
        <p>Renderings, Animations, Photography, and Web Design by DBOX.</p>
        <h4>© CENTURY PLAZA 2019</h4>
      </LegalContainer>
    </LegalWrapper>
  );
};

export default Legal;
