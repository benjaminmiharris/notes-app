import Col from "react-bootstrap/Col";

const Note = (props) => {
  const { note } = props;
  return (
    <Col md={3} className="note-component">
      {note.text}
    </Col>
  );
};

export default Note;
