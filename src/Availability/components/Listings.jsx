import React, { useState } from "react";
import Listing from "./Listing";
import { headers } from "../config";
import styled from "styled-components";
import {
  TableStyled,
  AscendingStyled,
  DescendingStyled
} from "Availability/style.js";

const AvailabilityTable = styled.table`
  ${TableStyled};
`;

const SortAscending = styled.span`
  ${AscendingStyled};
`;

const SortDescending = styled.span`
  ${DescendingStyled};
`;

const Listings = props => {
  const { listings, filters, path } = props;
  const headersObj = headers(path);
  let filteredListings = listings;

  const [sortColumnIndex, setSortColumnnIndex] = useState(0);
  const [sortDirection, setSortDirection] = useState("asc");

  const filterByBeds = (items, beds) => {
    if (!beds.length) return items;

    return items.filter(i => beds.includes(i.acf.beds));
  };

  const filterByViews = (items, views) => {
    if (!views.length) return items;

    let pattern = views.map(v => v[0]).join("|");
    let re = new RegExp(pattern);
    return items.filter(i => re.test(i.acf.views));
  };

  const handleSort = (title, index) => {
    if (sortColumnIndex === index) {
      let newDir = sortDirection === "asc" ? "dsc" : "asc";
      setSortDirection(newDir);
    } else {
      setSortColumnnIndex(index);
    }
  };

  const sortListings = items => {
    const sortKey = Object.keys(headersObj)[sortColumnIndex];
    const keys = headersObj[sortKey];
    const compare = (a, b) => {
      if (a === b) return 0;
      return a[keys[0]][keys[1]] < b[keys[0]][keys[1]] ? 1 : -1;
    };
    if (sortDirection === "asc") {
      return items.sort(compare);
    } else if (sortDirection === "dsc") {
      return items.sort(compare).reverse();
    }
  };

  for (let filterType in filters) {
    if (filterType === "beds") {
      filteredListings = filterByBeds(filteredListings, filters[filterType]);
    } else if (filterType === "views") {
      filteredListings = filterByViews(filteredListings, filters[filterType]);
    }
  }

  filteredListings = sortListings(filteredListings);

  const renderHeaderCell = (title, index) => {
    return (
      <th key={index}>
        <span onClick={() => handleSort(title, index)}>
          {title}
          {title === "Interior" && <span className="units">SF / SM</span>}
          {sortColumnIndex === index &&
            (sortDirection === "asc" ? <SortAscending /> : <SortDescending />)}
        </span>
      </th>
    );
  };

  return (
    <AvailabilityTable>
      <thead>
        <tr>
          {Object.keys(headersObj).map((header, index) =>
            renderHeaderCell(header, index)
          )}
        </tr>
      </thead>
      <tbody>
        {filteredListings.map(listing => (
          <Listing listing={listing} path={path} key={listing.id} />
        ))}
      </tbody>
    </AvailabilityTable>
  );
};

export default Listings;
