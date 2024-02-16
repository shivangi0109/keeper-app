const express = require('express');
const router = express.Router();
const noteQueries = require('../db/queries/allQueries');

// Notes Listing Page
router.get('/', (req, res) => {
  noteQueries
    .getNotes()
    .then((notes) => {
      console.log('Notes:', notes);
      res.json(notes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;