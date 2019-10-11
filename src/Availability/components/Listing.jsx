import React from "react";
import { directions } from "../config";

const Listing = props => {
  const { listing, path } = props;

  const getSqMetersFromSqFeet = sqFeet => Math.round(sqFeet / 10.764);

  const formatDirections = views => {
    const dirs = views ? views.split("") : [];
    return dirs.map(d => directions[d]).join(" ");
  };

  const formatCurrency = value => {
    return `$${parseInt(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  return (
    <tr>
      <td>{listing.acf.residence}</td>
      <td>{formatCurrency(listing.acf.list_price)}</td>
      <td>
        {listing.acf.beds} / {listing.acf.baths}
      </td>
      <td>
        {listing.acf.interior_square_ft} /{" "}
        {getSqMetersFromSqFeet(listing.acf.interior_square_ft)}
      </td>
      <td>{formatDirections(listing.acf.views)}</td>
      <td>{formatCurrency(listing.acf.hoa_fees)}</td>
      {/* <td>{listing.acf.interior_palette}</td> */}
      <td>
        {path === "hotel"
          ? listing.acf.interior_palette
          : formatDirections(listing.acf.building)}
      </td>
      <td>
        <a
          href={listing.acf.floor_plan}
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD
        </a>
      </td>
    </tr>
  );
};

export default Listing;
