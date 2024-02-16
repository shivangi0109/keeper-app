-- Inserting users
INSERT INTO users (username, password) VALUES
  ('user1', 'password1'),
  ('user2', 'password2'),
  ('user3', 'password3');

-- Inserting notes
INSERT INTO notes (user_id, title, content) VALUES
  (1, 'Note 1 for user 1', 'Content of note 1 for user 1'),
  (1, 'Note 2 for user 1', 'Content of note 2 for user 1'),
  (1, 'Note 3 for user 1', 'Content of note 3 for user 1'),
  (1, 'Note 4 for user 1', 'Content of note 4 for user 1'),
  (2, 'Note 1 for user 2', 'Content of note 1 for user 2'),
  (3, 'Note 1 for user 3', 'Content of note 1 for user 3');