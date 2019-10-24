import { urls } from './config';

export const fetchHotelListings = async () => {
  return await fetchListings('hotel');
};

export const fetchTowerListings = async () => {
  return await fetchListings('tower');
};

export const fetchListings = async (type) => {
  let url;
  if (type === 'hotel') {
    url = urls.hotelListings;
  } else if (type === 'tower') {
    url = urls.towerListings;
  }
      
  try {
    const response = await fetch(url);
    const listings = await response.json();
    return listings;
  } catch (e) {
    console.log(`Error fetching ${type} listings`);
    console.log(e)
    return e;
  }
};
