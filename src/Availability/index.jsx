import React, { useState, useEffect, useContext } from "react";
import Context from "../config/Context";
import { Router, useLocation } from "@reach/router";
import * as api from "./api";
import Listings from "./components/Listings";
import Filter from "./components/Filter";
import styled from "styled-components/macro";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import {
  ContainerStyled,
  HeaderStyled,
  ControlsStyled,
  FilterButtonStyled
} from "Availability/style.js";

const AvailabilityWrapper = styled.div`
  ${Wrapper};
`;

const AvailabilityContainer = styled.div`
  ${ContainerStyled};
`;
const AvailabilityHeader = styled.header`
  ${HeaderStyled};
`;

const AvailabilityControls = styled.ul`
  ${ControlsStyled};
  > li:first-child::after {
    content: "";
  }
`;

const AvailabilityFilter = styled.button`
  ${FilterButtonStyled};
`;

const Availability = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, navActive } = context;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "#FFFFFF";
    setPageColor("white");
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: props => props.theme.whiteGradient,
      footerBackground: "transparent",
      footerDisplay: true,
      footerFixed: false,
      sidebarBackground: "transparent"
    });
  }, [setGlobalConfig]);

  const [hotelListings, setHotelListings] = useState([]);
  const [towerListings, setTowerListings] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [currentHotelFilters, setCurrentHotelFilters] = useState({
    beds: [],
    views: []
  });
  const [currentTowerFilters, setCurrentTowerFilters] = useState({
    beds: [],
    views: []
  });
  const listings = {
    hotel: hotelListings,
    tower: towerListings
  };
  const currentFilters = {
    hotel: currentHotelFilters,
    tower: currentTowerFilters
  };
  const setCurrentFilterFns = {
    hotel: setCurrentHotelFilters,
    tower: setCurrentTowerFilters
  };

  useEffect(() => {
    const fetchHotelListings = async () => {
      const listings = await api.fetchHotelListings();
      setHotelListings(listings);
    };
    const fetchTowerListings = async () => {
      const listings = await api.fetchTowerListings();
      setTowerListings(listings);
    };

    fetchHotelListings();
    fetchTowerListings();
  }, []);

  const handleFilter = () => setShowFilter(!showFilter);

  // const ActiveListingLink = props => (
  //   <li>
  //     <Link
  //       {...props}
  //       getProps={({ isPartiallyCurrent }) => {
  //         return {
  //           style: {
  //             color: isPartiallyCurrent ? "#101820" : "#B4BAC1"
  //           }
  //         };
  //       }}
  //     />
  //   </li>
  // );

  return (
    <AvailabilityWrapper navActive={navActive}>
      <AvailabilityContainer navActive={navActive}>
        <AvailabilityHeader>
          {/* <p>Select a Residence</p> */}
          <AvailabilityControls>
            <li>{location.pathname === '/availability/tower' ? 'Anticipated Completion Spring 2022' : 'Fairmont Century Plaza Residences are Move-in-Ready' }</li>
            {/* <ActiveListingLink to="/availability/hotel">
              Hotel<span>&nbsp;Residences</span>
            </ActiveListingLink>
            <ActiveListingLink to="/availability/tower">
              Tower<span>&nbsp;Residences</span>
            </ActiveListingLink> */}
            <AvailabilityFilter onClick={handleFilter} active={showFilter}>
              Filter
            </AvailabilityFilter>
            {showFilter && (
              <Filter
                listings={listings}
                currentFilters={currentFilters}
                setCurrentFilters={setCurrentFilterFns}
              />
            )}
          </AvailabilityControls>
        </AvailabilityHeader>
        <Router primary={false}>
          <Listings
            default
            path="hotel"
            listings={hotelListings}
            filters={currentHotelFilters}
          />
          <Listings
            path="tower"
            listings={towerListings}
            filters={currentTowerFilters}
          />
        </Router>
      </AvailabilityContainer>
    </AvailabilityWrapper>
  );
};

export default Availability;
