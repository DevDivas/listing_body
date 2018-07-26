const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'listing_body'
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './public')));

app.get('/rooms/:roomId', (req, res) => {

  const room = req.params.roomId;

  const response = {};
  const tables = [
    'listing', 
    'home_highlights', 
    'basic', 
    'facilities', 
    'guest_access',
    'dining',
    'bed_and_bath',
    'safety_features'
  ];

  const queryTables = (table, room) => {
    let query = `SELECT * FROM ${table} WHERE id IN (${room});`;

    connection.query(query, (err, rows, fields) => {
      if (err) {
        throw Error(err)
      } else {
        response[table] = JSON.parse(JSON.stringify(rows[0]));
        if(Object.keys(response).length === tables.length) {
          res.status(200).send(response);
        }
      }
    });
  };

  tables.forEach((table) => {
    queryTables(table, room);
  });
})

module.exports = app;
