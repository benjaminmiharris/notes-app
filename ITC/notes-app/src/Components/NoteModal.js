import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NoteModal({ note }) {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {note.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{note.text}</Modal.Body>
      </Modal>
    </>
  );
}

export default NoteModal;
