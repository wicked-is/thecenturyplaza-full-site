export const urls = {
  hotelListings: "https://cms.dbox.com/wp-json/wp/v2/cp_availability_hotel?per_page=100",
  towerListings: "https://cms.dbox.com/wp-json/wp/v2/cp_availability_towers?per_page=100",
};

export const headers = (type) => ({
  'Residence': ['acf', 'residence'],
  'List Price': ['acf', 'list_price'],
  'Bed / Bath': ['acf', 'beds'],
  'Interior SF / SM': ['acf', 'interior_square_ft'],
  'Views': ['acf', 'views'],
  'HOA': ['acf', 'hoa_fees'],
  [type === 'tower' ? 'Building' : 'Interior Palette']: ['acf', type === 'tower' ? 'building' : 'interior_palette'],
  'Floor Plan': ['acf', 'floor_plan'],
});

export const directions = {
  E: 'East',
  S: 'South',
  W: 'West',
  N: 'North',
};
