const db = require('../database/db.js');

const getListingInfo = (roomId, callback) => {
  db.query(`SELECT * FROM listing WHERE id IN (${roomId})`, callback);
};

const getHomeHighlights = (roomId, callback) => {
  db.query(`SELECT * FROM home_highlights WHERE id IN (${roomId})`, callback);
};

const getHouseRules = (roomId, callback) => {
  db.query(`SELECT * FROM house_rules WHERE id IN (${roomId})`, callback);
};

const getAmenities = (roomId, response) => {
  const amenities = [
    'basic',
    'facilities',
    'guest_access',
    'dining',
    'bed_and_bath',
    'safety_features',
  ];
  const data = {};
  amenities.forEach((table) => {
    db.query(`SELECT * FROM ${table} WHERE id IN (${roomId});`, (err, rows) => {
      if (err) {
        throw Error(err);
      }

      data[table] = JSON.parse(JSON.stringify(rows[0]));
      if (Object.keys(data).length === amenities.length) {
        response.send(data);
      }
    });
  });
};

module.exports = {
  getHomeHighlights,
  getHouseRules,
  getAmenities,
  getListingInfo,
};
