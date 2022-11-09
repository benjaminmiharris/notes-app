import Note from "./Note";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Notes = ({ notes }) => {
  return (
    <Container fluid>
      <Row>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </Row>
    </Container>
  );
};

export default Notes;
