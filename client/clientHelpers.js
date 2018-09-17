const formatLines = line => line[0].toUpperCase() + line.slice(1).replace(/_/g, ' ');

const formatAmenities = (amenities) => {
  const amenitiesDescription = {
    wifi: 'Continuous access in the listing',
    laptop_friendly_workspace: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
    essentials: 'Towels, bed sheets, soap, and toilet paper',
    parking: 'Free parking on premises',
    kitchen: 'Space where guests can cook their own meals',
    washer: 'In the building, free or for a fee',
    dryer: 'In the building, free or for a fee',
  };

  const results = {};
  Object.keys(amenities).forEach((category) => {
    Object.keys(amenities[category]).forEach((amenity) => {
      const amenityVal = amenitiesDescription[amenity] ? amenitiesDescription[amenity] : amenity;

      if (!results[formatLines(category)]) {
        results[formatLines(category)] = {};
      }
      if (amenity !== 'id') {
        results[formatLines(category)][formatLines(amenity)] = formatLines(amenityVal);
      }
    });
  });
  return results;
};

const collectAmenities = (data) => {
  const amenitiesList = ['basic', 'facilities', 'guest_access', 'dining', 'bed_and_bath', 'safety_features'];
  return amenitiesList.reduce((accum, current) => {
    if (data[current]) {
      accum[current] = data[current];
    }
    return accum;
  }, {});
};

const formatHomeHighlights = (data) => {
  const { header1, header2, header3 } = data;
  const { message1, message2, message3 } = data;
  return [
    { headline: header1, message: message1 },
    { headline: header2, message: message2 },
    { headline: header3, message: message3 },
  ];
};

const formatHouseRules = (rules) => {
  const ruleSet = {
    suitable_for_children: 'Not safe or suitable for children (0-12 years)',
    smoking: 'No smoking',
    pets: 'Not suitable for pets',
    events: 'No parties or events',
    check_in: `Check-in is anytime after ${rules.check_in}PM`,
    check_out: `Check out by ${rules.check_out}PM`,
    custom_message: `${rules.custom_message}`,
    stair_access: 'Must climb stairs',
    security_deposit: 'Security Deposit - if you damage the home, you may be charged up to $300',
  };

  const results = {};
  Object.keys(rules).forEach(
    (rule) => {
      if (rules[rule]) {
        results[formatLines(rule)] = ruleSet[rule];
      }
    },
  );
  return results;
};

const iconCategories = {
  kitchen: 'm 10.5 0 a 0.5 0.5 0 0 0 -0.5 0.5 v 7 a 0.5 0.5 0 0 1 -0.49 0.5 h -1.51 v -7.5 a 0.5 0.5 0 1 0 -1 0 v 7.5 h -1.51 a 0.5 0.5 0 0 1 -0.49 -0.5 v -7 a 0.5 0.5 0 1 0 -1 0 v 7 c 0 0.83 0.67 1.5 1.49 1.5 h 1.51 v 5 c 0 0.03 0.01 0.06 0.02 0.09 a 1.49 1.49 0 0 0 -1.02 1.41 v 7 c 0 0.83 0.67 1.5 1.5 1.5 s 1.5 -0.67 1.5 -1.5 v -7 c 0 -0.66 -0.43 -1.21 -1.02 -1.41 c 0.01 -0.03 0.02 -0.06 0.02 -0.09 v -5 h 1.51 a 1.5 1.5 0 0 0 1.49 -1.5 v -7 a 0.5 0.5 0 0 0 -0.5 -0.5 Z m -2.5 15.5 v 7 a 0.5 0.5 0 0 1 -0.5 0.5 a 0.5 0.5 0 0 1 -0.5 -0.5 v -7 c 0 -0.28 0.22 -0.5 0.5 -0.5 s 0.5 0.22 0.5 0.5 Z m 11.5 -15.5 h -2 c -1.4 0 -2.5 1.07 -2.5 2.5 v 7 c 0 1.43 1.1 2.5 2.5 2.5 h 1.5 v 2.09 a 1.49 1.49 0 0 0 -0.5 -0.09 c -0.83 0 -1.5 0.67 -1.5 1.5 v 7 c 0 0.83 0.67 1.5 1.5 1.5 s 1.5 -0.67 1.5 -1.5 v -22.5 Z m -2 11 c -0.86 0 -1.5 -0.63 -1.5 -1.5 v -7 c 0 -0.87 0.65 -1.5 1.5 -1.5 h 1.5 v 10 Z m 1.5 11.5 a 0.5 0.5 0 0 1 -0.5 0.5 a 0.5 0.5 0 0 1 -0.5 -0.5 v -7 c 0 -0.28 0.22 -0.5 0.5 -0.5 s 0.5 0.22 0.5 0.5 Z',
  parking: 'm 12 0 c -6.63 0 -12 5.37 -12 12 s 5.37 12 12 12 s 12 -5.37 12 -12 s -5.37 -12 -12 -12 Z m 0 23 c -6.07 0 -11 -4.92 -11 -11 s 4.93 -11 11 -11 s 11 4.93 11 11 s -4.93 11 -11 11 Z m 0.5 -17 h -4.5 v 11.5 a 0.5 0.5 0 0 0 1 0 v -4.5 h 3.5 c 1.93 0 3.5 -1.57 3.5 -3.5 s -1.57 -3.5 -3.5 -3.5 Z m 0 6 h -3.5 v -5 h 3.5 c 1.38 0 2.5 1.12 2.5 2.5 s -1.12 2.5 -2.5 2.5 Z',
  wifi: 'm 12 15 a 3 3 0 1 0 0 6 a 3 3 0 0 0 0 -6 Z m 0 5 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 5.92 -5.78 a 0.5 0.5 0 1 1 -0.84 0.55 c -1.19 -1.81 -3.07 -2.77 -5.08 -2.77 s -3.89 0.96 -5.08 2.78 a 0.5 0.5 0 0 1 -0.84 -0.55 c 1.38 -2.1 3.58 -3.23 5.92 -3.23 s 4.54 1.13 5.92 3.23 Z m 2.98 -3.03 a 0.5 0.5 0 1 1 -0.79 0.61 c -1.66 -2.14 -5.22 -3.8 -8.11 -3.8 c -2.83 0 -6.26 1.62 -8.12 3.82 a 0.5 0.5 0 0 1 -0.76 -0.65 c 2.05 -2.42 5.75 -4.17 8.88 -4.17 c 3.19 0 7.05 1.8 8.9 4.19 Z m 2.95 -2.33 a 0.5 0.5 0 0 1 -0.71 -0.02 c -2.94 -3.07 -6.71 -4.84 -11.14 -4.84 s -8.2 1.77 -11.14 4.85 a 0.5 0.5 0 0 1 -0.72 -0.69 c 3.12 -3.27 7.14 -5.16 11.86 -5.16 s 8.74 1.89 11.86 5.16 a 0.5 0.5 0 0 1 -0.02 0.71 Z',
  laptop_friendly_workspace: 'm 5.5 5 h -0.5 v 8 h 14 v -8 Z m 12.5 7 h -12 v -6 h 12 Z m 5.9 6.69 l -0.04 -0.05 l -0.11 -0.14 l -0.4 -0.51 l -1.2 -1.55 l -1.15 -1.47 v -10.97 a 1 1 0 0 0 -0.99 -1 h -16.02 c -0.55 0 -0.99 0.45 -0.99 1 v 10.95 l -0.19 0.24 c -0.6 0.76 -1.2 1.53 -1.76 2.26 l -0.16 0.21 c -0.29 0.37 -0.55 0.72 -0.79 1.04 l -0.1 0.13 v 0.17 c 0 1.35 0.65 2 2 2 h 20 c 1.17 0 2 -0.71 2 -2 v -0.17 l -0.11 -0.14 Z m -19.9 -14.69 h 16.01 c -0.01 0 -0.01 7.92 -0.01 10 h -16 Z m 18 16 h -20 c -0.73 0 -0.96 -0.2 -0.99 -0.85 c 0.21 -0.28 0.43 -0.56 0.66 -0.87 l 0.16 -0.21 a 229.93 229.93 0 0 1 2.33 -2.98 l 0.07 -0.09 h 15.51 l 1.6 2.06 l 1.2 1.55 a 4.70818e+6 4.70818e+6 0 0 1 0.42 0.54 c -0.05 0.59 -0.38 0.86 -0.98 0.86 Z m -7.52 -3.62 a 0.5 0.5 0 0 0 -0.48 -0.38 h -4 a 0.5 0.5 0 0 0 -0.49 0.38 l -0.5 2 a 0.5 0.5 0 0 0 0.49 0.62 h 5 a 0.5 0.5 0 0 0 0.49 -0.62 l -0.5 -2 Z m -4.34 1.62 l 0.25 -1 h 3.22 l 0.25 1 Z',
  tv: 'm 21.5 6 h -9.07 l 3.49 -5.22 a 0.5 0.5 0 1 0 -0.83 -0.55 l -3.86 5.77 h -2.46 l -3.85 -5.78 a 0.5 0.5 0 0 0 -0.83 0.55 l 3.48 5.23 h -5.07 a 2.5 2.5 0 0 0 -2.5 2.5 v 13 c 0 1.39 1.12 2.5 2.5 2.5 h 19 c 1.38 0 2.5 -1.12 2.5 -2.5 v -13 c 0 -1.38 -1.12 -2.5 -2.5 -2.5 Z m 1.5 15.5 c 0 0.83 -0.68 1.5 -1.5 1.5 h -19 c -0.83 0 -1.5 -0.67 -1.5 -1.5 v -13 c 0 -0.83 0.68 -1.5 1.5 -1.5 h 19 c 0.83 0 1.5 0.67 1.5 1.5 Z m -6.49 -12.5 h -11.02 a 2.49 2.49 0 0 0 -2.49 2.49 v 7.02 a 2.5 2.5 0 0 0 2.49 2.49 h 11.02 a 2.49 2.49 0 0 0 2.49 -2.49 v -7.02 a 2.5 2.5 0 0 0 -2.49 -2.49 Z m 1.49 9.51 c 0 0.82 -0.67 1.49 -1.49 1.49 h -11.02 c -0.82 0 -1.49 -0.67 -1.49 -1.49 v -7.02 c 0 -0.82 0.67 -1.49 1.49 -1.49 h 11.02 c 0.82 0 1.49 0.67 1.49 1.49 Z m 4 -8.51 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z m 0 3 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z',
  hangers: 'm 23.75 16.07 l -11.75 -6.9 v -1.23 c 1.08 -0.27 2 -1.34 2 -2.44 a 2.5 2.5 0 1 0 -5 0 a 0.5 0.5 0 0 0 1 0 a 1.5 1.5 0 1 1 3 0 c 0 0.72 -0.78 1.5 -1.5 1.5 a 0.5 0.5 0 0 0 -0.5 0.5 v 1.77 l -10.77 6.81 a 0.48 0.48 0 0 0 -0.23 0.41 v 0.01 c 0 0.26 0.19 0.51 0.5 0.51 h 23 c 0.32 0 0.51 -0.26 0.5 -0.52 v -0.01 a 0.48 0.48 0 0 0 -0.25 -0.41 Z m -21.52 -0.07 l 9.36 -5.92 l 10.07 5.92 Z',
  shampoo: 'm 14.5 4 h 0.5 v -1.5 c 0 -1.39 -1.12 -2.5 -2.5 -2.5 h -0.99 a 2.5 2.5 0 0 0 -2.51 2.5 v 1.5 Z m -4.5 -1.5 c 0 -0.83 0.67 -1.5 1.51 -1.5 h 0.99 c 0.83 0 1.5 0.67 1.5 1.5 v 0.5 h -4 Z m 5.5 2.5 h -7 a 3.5 3.5 0 0 0 -3.5 3.49 v 12.01 c 0 1.93 1.57 3.5 3.5 3.5 h 7 a 3.5 3.5 0 0 0 3.5 -3.49 v -12.02 c 0 -1.92 -1.57 -3.49 -3.5 -3.49 Z m 2.5 15.51 a 2.5 2.5 0 0 1 -2.5 2.49 h -7 a 2.5 2.5 0 0 1 -2.5 -2.49 v -12.02 a 2.5 2.5 0 0 1 2.5 -2.49 h 7 a 2.5 2.5 0 0 1 2.5 2.49 v 12.01 Z m -1 -11.01 a 0.5 0.5 0 0 1 -0.5 0.5 h -9 a 0.5 0.5 0 0 1 0 -1 h 9 a 0.5 0.5 0 0 1 0.5 0.5 Z',
  thumbsUp: 'm 8.37 1 c -0.34 0 -0.53 0.43 -0.64 0.79 l -0.04 0.17 c -0.17 0.74 -0.56 2.47 -3.76 3.58 c -1.97 0.68 -2.93 2.31 -2.93 4.96 c 0 1.68 0.56 4.5 4.3 4.5 h 6.2 c 0.3 0 1 -0.06 1 -0.63 c 0 -0.41 -0.26 -0.63 -0.5 -0.63 a 0.5 0.5 0 1 1 0 -1 c 0.92 0 1 -0.31 1 -0.63 c 0 -0.52 -0.38 -0.61 -0.54 -0.63 a 0.5 0.5 0 0 1 -0.46 -0.52 a 0.5 0.5 0 0 1 0.5 -0.48 c 1 0 1 -0.41 1 -0.63 s 0 -0.62 -1 -0.62 a 0.5 0.5 0 1 1 0 -1 c 1 0 1 -0.47 1 -0.63 c 0 -0.58 -0.77 -0.63 -1 -0.63 h -4.5 a 1 1 0 0 1 -0.83 -1.56 c 0.05 -0.07 0.16 -0.19 0.31 -0.35 c 0.34 -0.35 0.92 -0.93 1.21 -1.58 c 0.24 -0.52 0.35 -1.25 0.28 -1.78 c 0 -0.01 -0.12 -0.74 -0.62 -0.74 m 3.15 15.04 h -6.2 c -3.32 0 -5.3 -2.06 -5.3 -5.5 c 0 -3.09 1.21 -5.08 3.61 -5.91 c 2.67 -0.93 2.97 -2.23 3.11 -2.86 c 0.02 -0.08 0.04 -0.16 0.05 -0.22 c 0.37 -1.31 1.16 -1.51 1.6 -1.51 c 1.02 0 1.52 0.96 1.61 1.61 c 0.09 0.71 -0.06 1.64 -0.37 2.32 c -0.37 0.81 -1.02 1.47 -1.41 1.86 c -0.09 0.1 -0.17 0.17 -0.2 0.21 h 4.5 c 1.2 0 2 0.65 2 1.63 c 0 0.46 -0.16 0.84 -0.45 1.11 c 0.39 0.37 0.45 0.86 0.45 1.14 c 0 0.34 -0.09 0.98 -0.74 1.35 c 0.15 0.23 0.24 0.53 0.24 0.9 c 0 0.41 -0.12 1.01 -0.74 1.36 c 0.15 0.26 0.24 0.56 0.24 0.89 c 0 0.97 -0.8 1.63 -2 1.63',
};

export default {
  formatLines,
  collectAmenities,
  formatAmenities,
  formatHomeHighlights,
  formatHouseRules,
  iconCategories,
};
