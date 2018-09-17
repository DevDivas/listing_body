const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const {
  getListingInfo,
  getHomeHighlights,
  getHouseRules,
  getAmenities,
} = require('./helpers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/rooms/:roomId', express.static(path.join(__dirname, '../public')));

app.get('/rooms/:roomId/listingInfo', (req, res) => {
  const room = req.params.roomId;
  getListingInfo(room, (err, rows) => {
    if (err) {
      throw Error(err);
    }
    res.send(rows[0]);
  });
});

app.get('/rooms/:roomId/homeHighlights', (req, res) => {
  const room = req.params.roomId;
  getHomeHighlights(room, (err, rows) => {
    if (err) {
      throw Error(err);
    }
    res.send(rows[0]);
  });
});

app.get('/rooms/:roomId/houseRules', (req, res) => {
  const room = req.params.roomId;
  getHouseRules(room, (err, rows) => {
    if (err) {
      throw Error(err);
    }
    res.send(rows[0]);
  });
});

app.get('/rooms/:roomId/amenities', (req, res) => {
  const room = req.params.roomId;
  getAmenities(room, res);
});

module.exports = app;
