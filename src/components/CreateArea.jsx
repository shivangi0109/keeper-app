import { useState } from "react";

function CreateArea(props) {
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
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    })
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;