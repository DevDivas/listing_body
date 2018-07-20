const fs = require('fs');
const faker = require('faker');
const data = require('./data.js');

const generateData = (field, fileName) => {
  // i: string, and string
  // o: side effect, writes field content to fileName

  const info = Array.isArray(field) ? field.join('\n') : field.split('\n').join('\n');

  fs.writeFile(`${fileName}.csv`, info, 'utf8', (err) => {
    if (err) {
      throw Error;
    } else {
      console.log('write was successful!');
    }
  });
};

const getRandomIndex = max => Math.floor(Math.random() * (max + 1));

const capitalizeFirstLetter = (word) => {

  const first = word[0];
  const remainder = word.slice(1);

  return first.toUpperCase() + remainder;
};

const generateExperience = () => {
  let result = '';

  for (let i = 0; i <= 100; i += 1) {
    let adjective1 = data.adjectives.split('\n')[getRandomIndex(32)];
    adjective1 = capitalizeFirstLetter(adjective1);

    let adjective2 = data.adjectives.split('\n')[getRandomIndex(32)];
    adjective2 = capitalizeFirstLetter(adjective2);

    let noun = data.nouns.split('\n')[getRandomIndex(12)];
    noun = capitalizeFirstLetter(noun);

    result += `${adjective1} ${adjective2} ${noun}\n`;
  }
  return result;
};

const generateFakeNames = () => Array(100).fill('').map(faker.name.firstName);

generateData(generateFakeNames(), 'host-names');
generateData(data.cities, 'cities');
generateData(generateExperience(), 'listing-name');
