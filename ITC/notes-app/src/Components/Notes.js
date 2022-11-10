import Note from "./Note";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Notes = ({ notes, deleteNote }) => {
  return (
    <Container spacing={5}>
      <Row>
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </Row>
    </Container>
  );
};

export default Notes;
