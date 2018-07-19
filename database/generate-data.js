const fs = require('fs');
const data = require('./data.js');
// generate data
// write to csv file

const generateData = (field, fileName) => {
  // i: string, and string
  // o: side effect, writes field content to fileName

  let info = field.split('\n').join(',');
  fs.writeFile(`${fileName}.txt`, info, (err) => {
    if (err) {
      console.log('there was an error!');
    } else {
      console.log('write was successful!');
    }
  })

};

const getRandomIndex = (num) => {
  // i: number
  // o: number, random between 0 and num

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  };

  return getRandomIntInclusive(0, num);
}

const capitalizeFirstLetter = (word) => {
  // i: string, word
  // o: string, word with first letter capitalized

  let first = word[0];
  let remainder = word.slice(1);

  return first.toUpperCase() + remainder;
}

const generateExperience = () => {
  // i: nothing
  // o: string

  let result = ``;

  for (let i = 0; i <= 100; i++) {
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

generateData(data.hostNames, 'host-names');
generateData(data.cities, 'cities');
generateData(generateExperience(), 'listing-name');

