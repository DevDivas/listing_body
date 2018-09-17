const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('../database/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/rooms/:roomId', express.static(path.join(__dirname, '../public')));

app.get('/rooms/:roomId/x', (req, res) => {
  const room = req.params.roomId;
  const response = {};
  const tables = ['listing', 'home_highlights', 'basic', 'facilities', 'guest_access', 'dining', 'bed_and_bath', 'safety_features', 'house_rules'];

  tables.forEach((table) => {
    connection.query(`SELECT * FROM ${table} WHERE id IN (${room});`, (err, rows) => {
      if (err) {
        console.log(err);
        // throw Error(err);
      }

      response[table] = JSON.parse(JSON.stringify(rows[0]));
      if (Object.keys(response).length === tables.length) {
        res.send(response);
      }
    });
  });
});

module.exports = app;
