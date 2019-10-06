import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import * as api from "./api";
import Listings from "./components/Listings";
import Filter from "./components/Filter";

const Availability = props => {
  const { setPageColor } = props;

  useEffect(() => {
    setPageColor(props => props.theme.white);
  }, [setPageColor]);

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

  return (
    <div style={{ marginTop: "100px", marginLeft: "24px" }}>
      <p style={{ margin: "18px 0 18px 0" }}>
        Select a Residence Availability List
      </p>
      <div style={{ marginBottom: "18px" }}>
        <Link to="/availability/hotel">Fairmont Hotel</Link> {" / "}
        <Link to="/availability/tower">Two Eleven Elm</Link>
        <button onClick={handleFilter}>Filter</button>
        {showFilter && (
          <Filter
            listings={listings}
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilterFns}
          />
        )}
      </div>
      <Router>
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
    </div>
  );
};

export default Availability;
