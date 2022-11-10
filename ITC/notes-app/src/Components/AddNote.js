import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add some text to this note!");
      return;
    }

    //onAdd has all of the form input passed as params

    onAdd({ title, text });

    setText("");
    setTitle("");
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="form" onSubmit={onSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                className="note-title"
                placeholder="Title"
                aria-label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>

            <Form.Group className="mb-3">
              <InputGroup>
                <Form.Control
                  placeholder="Your note..."
                  as="textarea"
                  aria-label="With textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNote;