const fs = require('fs');
const data = require('./data.js');
const faker = require('faker');
// generate data
// write to csv file

const generateData = (field, fileName) => {
  // i: string, and string
  // o: side effect, writes field content to fileName


  const info = Array.isArray(field) ? field.join('\n') : field.split('\n').join('\n');

  fs.writeFile(`${fileName}.csv`, info, 'utf8', (err) => {
    if (err) {
      console.log('there was an error!');
    } else {
      console.log('write was successful!');
    }
  });
};

const getRandomIndex = max => Math.floor(Math.random() * (max + 1));

const capitalizeFirstLetter = (word) => {
  // i: string, word
  // o: string, word with first letter capitalized

  let first = word[0];
  let remainder = word.slice(1);

  return first.toUpperCase() + remainder;
};

const generateExperience = () => {
  // i: nothing
  // o: string

  let result = ``;

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
const generateFakeAddress = () => Array(100).fill('').map(faker.address.city);

generateData(generateFakeNames(), 'host-names');
generateData(data.cities, 'cities');
generateData(generateExperience(), 'listing-name');
