const uniqid = require('uniqid');
const db = require('../db/db.json');
const fs = require('fs');

// API ROUTING

module.exports = (app) => {
    // Get notes data and sends it
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        err ? console.error(err) : res.send(data);
    })
  });

};
