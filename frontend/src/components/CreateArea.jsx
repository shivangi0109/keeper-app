import { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import axios from 'axios';

function CreateArea(props) {
  const formRef = useRef();
  const newNote = {};
  const [isExpanded, setIsExpanded] = useState(false);

  const submitNote = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    newNote.title = formData.get('title');
    newNote.content = formData.get('content');

    axios
      .post('/api/notes', newNote)
      .then(() => {
        props.onAdd(newNote);
        formRef.current.reset();
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
        { isExpanded && <input name="title" placeholder="Title" /> }
        <textarea onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} />
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