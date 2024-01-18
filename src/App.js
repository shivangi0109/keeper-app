import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  const addItem = (note) => {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
