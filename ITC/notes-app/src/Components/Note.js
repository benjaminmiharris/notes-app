import { useState } from "react";
import Col from "react-bootstrap/Col";
import moment from "moment";
import CloseButton from "react-bootstrap/CloseButton";
import NoteModal from "./NoteModal";

const Note = (props) => {
  const { note, deleteNote } = props;

  const createdDate = () => moment().format("LLL");

  const [popUpModal, setPopUpModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.text);

  function showModal() {
    setPopUpModal(!popUpModal);
  }

  return (
    <Col onClick={showModal} md={3} className="note-component">
      <CloseButton onClick={() => deleteNote(note.id)} />
      <div className="created-on-date">{createdDate()}</div>
      <div className="note-title">{noteTitle}</div>
      <div className="note-text"> {noteText}</div>

      <NoteModal
        note={note}
        isModalOpen={popUpModal}
        hideModal={showModal}
        setTitle={setNoteTitle}
        setText={setNoteText}
      />
    </Col>
  );
};

export default Note;
