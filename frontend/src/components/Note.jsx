import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

  const handleClick = (noteId) => {
    console.log(noteId);
    // props.onDelete(props.id);
    axios.delete(`/api/notes/${noteId}`)
      .then(() => {
        props.onDelete(props.id);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => handleClick(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;