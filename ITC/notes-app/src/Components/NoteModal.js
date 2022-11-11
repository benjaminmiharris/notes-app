import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function NoteModal({ note, isModalOpen }) {
  return (
    <>
      <Modal
        size="sm"
        show={isModalOpen}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header
          closeButton
          onClick={() => {
            console.log("close");
          }}
        >
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
