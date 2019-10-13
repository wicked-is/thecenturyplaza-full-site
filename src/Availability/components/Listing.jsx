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
      <td>
        <span className="mobile-label">Residence</span>
        {listing.acf.residence}
      </td>
      <td>
        <span className="mobile-label">Listing Price</span>
        {formatCurrency(listing.acf.list_price)}
      </td>
      <td>
        <span className="mobile-group">
          {listing.acf.beds}
          <span className="mobile-unit">
            Bedroom{listing.acf.beds > 1 && "s"}
          </span>
        </span>
        <span className="desktop-label"> / </span>
        <span className="mobile-group">
          {listing.acf.baths}
          <span className="mobile-unit">
            Bathroom{listing.acf.baths > 1 && "s"}
          </span>
        </span>
      </td>
      <td>
        <span className="mobile-label">Interior</span>
        {listing.acf.interior_square_ft}
        <span className="mobile-unit">SF</span> /{" "}
        {getSqMetersFromSqFeet(listing.acf.interior_square_ft)}
        <span className="mobile-unit">SM</span>
      </td>
      <td>
        <span className="mobile-label">Views</span>
        {formatDirections(listing.acf.views)}
      </td>
      <td>
        <span className="mobile-label">HOA</span>
        {formatCurrency(listing.acf.hoa_fees)}
      </td>
      <td>
        <span className="mobile-label">Palette</span>
        {listing.acf.interior_palette}
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
