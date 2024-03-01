import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import axios from 'axios';
// import notes from "./notes";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    axios
      .get('/api/notes')
      .then((res) => {
        setNotes(res.data);
        console.log(notes);
      })
      .catch((error) => {
        console.error('Error loading notes:', error);
      });
  }, []);

  const addItem = (note) => {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  };

  const deleteNote = (id) => {
    console.log(notes);
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return noteItem.note_id !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note, index) => (
          <Note key={note.note_id} id={note.note_id} title={note.title} content={note.content} onDelete={deleteNote} />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
