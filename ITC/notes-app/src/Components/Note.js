import Col from "react-bootstrap/Col";
import moment from "moment";
import CloseButton from "react-bootstrap/CloseButton";

const Note = (props) => {
  const { note, deleteNote } = props;

  const createdDate = () => moment().format("LLL");

  return (
    <Col md={3} className="note-component">
      <CloseButton onClick={() => deleteNote(note.id)} />
      <div className="created-on-date">{createdDate()}</div>
      <div className="note-title">{note.title}</div>
      <div className="note-text"> {note.text}</div>
    </Col>
  );
};

export default Note;
