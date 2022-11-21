import { useState } from "react";
import Col from "react-bootstrap/Col";
import moment from "moment";
import CloseButton from "react-bootstrap/CloseButton";
import NoteModal from "./NoteModal";

const Note = (props) => {
  const { note, deleteNote } = props;

  const createdDate = () => moment().format("LLL");

  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.text);

  const [updateDate, setUpdateDate] = useState("");

  return (
    <Col md={3} className="note-component">
      <CloseButton onClick={() => deleteNote(note.id)} />
      <div className="created-on-date">{createdDate()}</div>

      {updateDate.length > 0 && (
        <div className="created-on-date">Updated on {updateDate}</div>
      )}

      <div className="note-title">{noteTitle}</div>
      <div className="note-text"> {noteText}</div>

      <NoteModal
        note={note}
        setTitle={setNoteTitle}
        setText={setNoteText}
        setUpdateDate={setUpdateDate}
      />
    </Col>
  );
};

export default Note;
