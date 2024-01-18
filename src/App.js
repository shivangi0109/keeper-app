import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map(note => (
          <Note key={note.key} title={note.title} content={note.content} />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
