const fs = require('fs');
const faker = require('faker');
const data = require('./data.js');

const capitalizeFirstLetter = word => word[0].toUpperCase() + word.slice(1);

const getRandomIndex = max => Math.floor(Math.random() * (max - 1 + 1)) + 1;

const randomBool = () => Math.floor(Math.random() * (1 + 1));

const generateExperience = () => {
  let result = '';

  for (let i = 0; i <= 100; i += 1) {
    const adjective1 = capitalizeFirstLetter(data.adjectives.split('\n')[getRandomIndex(32)]);
    const adjective2 = capitalizeFirstLetter(data.adjectives.split('\n')[getRandomIndex(32)]);
    const noun = capitalizeFirstLetter(data.nouns.split('\n')[getRandomIndex(12)]);

    result += `${adjective1} ${adjective2} ${noun}\n`;
  }
  return result;
};

const generateListing = () => {
  const results = [];
  const citiesAndStates = data.cities.split('\n').map(cityState => cityState.split(','));
  const experience = generateExperience().split('\n');

  for (let i = 0; i <= 100; i += 1) {
    const num = getRandomIndex(8);
    results.push(`${i + 1},`
      + `${experience[i]},`
      + `${citiesAndStates[i][0]},`
      + `${citiesAndStates[i][1]},`
      + `${faker.name.firstName()},`
      + `${faker.lorem.paragraph()},`
      + `${num},`
      + `${getRandomIndex(num)},`
      + `${getRandomIndex(num - 1)}`);
  }
  return results.join('\n');
};
const generateHomeHighlights = () => {
  const results = [];

  for (let i = 0; i <= 100; i += 1) {
    const adjective = capitalizeFirstLetter(data.adjectives.split('\n')[getRandomIndex(32)]);
    const noun = capitalizeFirstLetter(data.nouns.split('\n')[getRandomIndex(12)]);

    const header = `${adjective} ${noun}`;
    const helpful = randomBool(1);
    results.push(`${i + 1},`
      + `${i + 1},`
      + `${header},`
      + `${faker.lorem.sentence()},`
      + `${helpful},`
      + `${helpful > 0 ? 0 : 1}`);
  }
  return results.join('\n');
};

const generateHouseRules = () => {
  const results = [];

  for (let i = 0; i <= 100; i += 1) {
    results.push(`${i + 1}
      ${i + 1}
      ${randomBool(1)}
      ${randomBool(1)}
      ${randomBool(1)}
      ${randomBool(1)}
      3
      12
      ${faker.lorem.paragraph()}
      ${randomBool(1)}
      ${randomBool(300)}`.split('\n').join(','));
  }
  return results.join('\n');
};

const generateAmenities = (num) => {
  let results = '';

  for (let i = 0; i < 100; i += 1) {
    let amenityStr = `${i + 1},${i + 1},`;
    for (let j = 0; j < num; j += 1) {
      const trail = j === num ? '\n' : ',';
      amenityStr += `${randomBool()}${trail}`;
    }
    results += amenityStr.includes('\n') ? amenityStr : `${amenityStr}\n`;
  }
  return results;
};

const generateAmenitiesTable = (num) => {
  let results = '';

  for (let i = 0; i < 100; i += 1) {
    let amenityStr = `${i + 1},`;
    for (let j = 0; j <= num; j += 1) {
      const trail = j === num ? '\n' : ',';
      amenityStr += `${i + 1}${trail}`;
    }
    results += amenityStr.includes('\n') ? amenityStr : `${amenityStr}\n`;
  }
  return results;
};

const generateFile = (field, fileName) => {
  const info = Array.isArray(field) ? field.join('\n') : field.split('\n').join('\n');

  fs.writeFile(`./data/${fileName}.csv`, info, 'utf8', (err) => {
    if (err) {
      throw Error(err);
    } else {
      console.log('write was successful!');
    }
  });
};

const amenities = ['basic', 'facilities', 'guest-access', 'dining', 'bed-and-bath', 'safety-features'];
const catNums = [7, 3, 2, 1, 5, 3];

amenities.forEach((amenity, i) => {
  generateFile(generateAmenities(catNums[i]), amenity);
});

generateFile(generateListing(), 'listing');
generateFile(generateHomeHighlights(), 'home-highlights');
generateFile(generateHouseRules(), 'house-rules');
generateFile(generateAmenitiesTable(7), 'amenities');
