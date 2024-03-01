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

// Add New Note
router.post('/', (req, res) => {
  const newNote = req.body;
  newNote.user_id = 1;

  noteQueries
    .addNote(newNote)
    .then(() => {
      res.json('Note added successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to add note! ☹️' });
    });
});

// Delete Note
router.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  console.log(noteId);
  noteQueries
    .deleteNote(noteId)
    .then(() => {
      res.json('Note removed successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to remove note! ☹️' });
    });
});

module.exports = router;