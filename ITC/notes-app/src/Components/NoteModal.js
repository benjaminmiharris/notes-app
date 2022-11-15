import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NoteModal({ note, setTitle, setText }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalNoteTitle, setModalTitle] = useState(note.title);
  const [modalNoteText, setModalText] = useState(note.text);

  const onChangeTitleHandler = (e) => {
    setModalTitle(e.target.value);
  };

  const onChangeTextHandler = (e) => {
    setModalText(e.target.value);
  };

  const updateNote = () => {
    setTitle(modalNoteTitle);
    setText(modalNoteText);
    handleClose();
  };

  const closeModalWithoutUpdate = () => {
    setModalText(note.text);
    setModalTitle(note.title);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Title"
                  value={modalNoteTitle}
                  onChange={onChangeTitleHandler}
                />
              </InputGroup>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <InputGroup>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  value={modalNoteText}
                  onChange={onChangeTextHandler}
                />
              </InputGroup>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalWithoutUpdate}>
              Close
            </Button>
            <Button variant="primary" onClick={updateNote}>
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default NoteModal;
