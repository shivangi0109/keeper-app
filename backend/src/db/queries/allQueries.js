const db = require('../connection');

const getNotes = () => {
  return db.query('SELECT * FROM notes;').then((data) => {
    return data.rows;
  });
};

const addNote = (note) => {
  const {
    user_id,
    title,
    content,
  } = note;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db
    .query(
      'INSERT INTO notes (user_id, title, content) VALUES ($1, $2, $3) RETURNING *;',
      [
        user_id,
        title,
        content,
      ]
    )
    .then((data) => {
      return data.rows[0];
    });
};

const deleteNote = (noteId) => {
  return db
    .query('DELETE FROM notes WHERE id = $1 RETURNING *;', [noteId])
    .then(() => {
      return { message: 'Note deleted successfully' };
    });
};

module.exports = { getNotes, addNote, deleteNote };