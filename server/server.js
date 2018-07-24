const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const PORT = 3000;

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

  console.log(req.params.roomId);
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
    // console.log(query);
    connection.query(query, (err, rows, fields) => {
      if (err) {
        throw Error(err)
      } else {
        response[table] = JSON.parse(JSON.stringify(rows[0]));
        if(Object.keys(response).length === tables.length) {
          console.log([response]);
          res.send([response]);
        }
      }
    });
  };

  tables.forEach((table) => {
    queryTables(table, room);
    // console.log(response);
  });

  // res.send(response);
  // let query = `SELECT * FROM listing, 
  //   home_highlights, 
  //   house_rules, 
  //   basic, 
  //   facilities, 
  //   guest_access, 
  //   dining, 
  //   bed_and_bath, 
  //   safety_features WHERE 
  //   listing.id IN (${room}) 
  //   AND home_highlights.id IN (${room}) 
  //   AND house_rules.id IN (${room}) 
  //   AND basic.id IN (${room}) 
  //   AND facilities.id IN (${room}) 
  //   AND guest_access.id IN (${room}) 
  //   AND dining.id IN (${room}) 
  //   AND bed_and_bath.id IN (${room}) 
  //   AND safety_features.id IN (${room})`;

  // connection.query(query, (err, rows, fields) => {
  //   if (err) {
  //     throw Error(err);
  //   } else {
  //     // console.log(rows);
  //     res.send(rows);
  //   }
  // });
  

})

// connection.end();

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`)
})
