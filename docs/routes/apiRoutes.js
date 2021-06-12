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

  // Post a new note
  app.post('/api/notes', (req, res) => {
    // Start
    fs.readFile('./db/db.json', (err, data) => {
        if(err){
            console.error(err);
        } else{
            let allNotes = JSON.parse(data);
            let newNote = req.body;
            newNote['id'] = uniqid();
            allNotes.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(allNotes), (err) => {
                err ? console.error(err) : console.log('Successfully Added!');
            })
            res.json(newNote);
        }
    })
  });
};
