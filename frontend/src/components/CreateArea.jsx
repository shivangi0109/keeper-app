import { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import axios from 'axios';

function CreateArea(props) {
  // const formRef = useRef();
  // const newNote = {};
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  console.log(note);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    event.preventDefault();
    // props.onAdd(note);
    // setNote({
    //   title: "",
    //   content: "",
    // })

    // const formData = new FormData(event.target);
    // newNote.title = formData.get('title');
    // newNote.content = formData.get('content');

    axios
      .post('/api/notes', note)
      .then(() => {
        props.onAdd(note);
        setNote({
          title: "",
          content: "",
        })
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const expand = () => {
    setIsExpanded(true);
  }

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
        { isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> }
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={note.content} />
        <Zoom in={isExpanded ? true : false}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;