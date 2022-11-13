import { useState } from "react";
import Col from "react-bootstrap/Col";
import moment from "moment";
import CloseButton from "react-bootstrap/CloseButton";
import NoteModal from "./NoteModal";

const Note = (props) => {
  const { note, deleteNote } = props;

  const createdDate = () => moment().format("LLL");

  const [popUpModal, setPopUpModal] = useState(false);

  function showModal() {
    setPopUpModal(!popUpModal);
  }

  return (
    <Col onClick={showModal} md={3} className="note-component">
      <CloseButton onClick={() => deleteNote(note.id)} />
      <div className="created-on-date">{createdDate()}</div>
      <div className="note-title">{note.title}</div>
      <div className="note-text"> {note.text}</div>

      <NoteModal note={note} isModalOpen={popUpModal} hideModal={showModal} />
    </Col>
  );
};

export default Note;
