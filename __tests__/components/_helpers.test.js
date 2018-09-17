import helpers from '../../client/clientHelpers';

const sampleAmenities = {
  basic: {
    id: 22,
    wifi: 0,
    washer: 0,
    dryer: 1,
    laptop_friendly_workspace: 1,
    tv: 1,
    air_conditioning: 0,
    essentials: 1,
  },
  facilities: {
    id: 22,
    parking: 1,
    elevator: 0,
    hot_tub: 0,
  },
  guest_access: {
    id: 22,
    host_greets: 1,
    lockbox: 0,
  },
  dining: {
    id: 22,
    kitchen: 0,
  },
  bed_and_bath: {
    id: 22,
    hair_dryer: 0,
    hangers: 0,
    shampoo: 1,
    bed_linens: 1,
    extra_pillows_blankets: 0,
  },
  safety_features: {
    id: 22,
    fire_extinguisher: 1,
    smoke_detector: 0,
    first_aid: 1,
  },
};

describe('Amenities Helpers', () => {
  const formattedAmenitiesData = helpers.formatAmenities(sampleAmenities);

  it('should return an object', () => {
    expect(typeof formattedAmenitiesData).toBe('object');
  });

  it('should have as many props as amenities', () => {
    expect(Object.keys(formattedAmenitiesData).length).toEqual(6);
  });

  it('formatAmenities should return a formatted object', () => {
    const lowerCaseStrings = ['lower_case', 'strings_with_under_score', 'lower', 'case'];
    const expected = ['Lower case', 'Strings with under score', 'Lower', 'Case'];
    expect(lowerCaseStrings.map(
      string => helpers.formatLines(string),
    )).toEqual(expected);
  });

  it('collectAmenities should return an object with all amenity props', () => {
    const exampleData = {
      basic: { id: 1, wifi: 0 },
      bed_and_bath: { id: 1, hair_dryer: 0 },
      dining: { id: 1, kitchen: 1 },
      facilities: { id: 1, parking: 1 },
      guest_access: { id: 1, host_greets: 0, lockbox: 1 },
      home_highlights: { id: 1, header1: 'Happy Spot' },
      house_rules: { id: 1, suitable_for_children: 1 },
      listing: { id: 1, name: 'Jubilant Joyful Space' },
      safety_features: { id: 1, fire_extinguisher: 1 },
    };
    const amenitiesList = ['basic', 'facilities', 'guest_access', 'dining', 'bed_and_bath', 'safety_features'];
    expect(Object.keys(helpers.collectAmenities(exampleData))).toEqual(amenitiesList);
  });

  it('formatLines should return a formatted string', () => {
    expect(helpers.formatLines('number_of_guests')).toEqual('Number of guests');
  });
});
