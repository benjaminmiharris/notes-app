import "./App.css";
import AddNote from "./Components/AddNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import { useState } from "react";

function App() {
  const [notes, setNote] = useState([]);

  //note is the data which has been passed on AddNote: line 23 as params

  const addNote = (note) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newNote = { id, ...note };

    setNote([...notes, newNote]);
  };

  function deleteNote(id) {
    window.confirm("Are you sure you want to delete your note?")
      ? setNote(notes.filter((note) => note.id !== id))
      : setNote(notes);
  }

  return (
    <div className="App">
      <Header title="A Place to store your notes!" />
      <AddNote onAdd={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
