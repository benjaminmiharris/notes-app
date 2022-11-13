import Modal from "react-bootstrap/Modal";

function NoteModal({ note, isModalOpen, hideModal }) {
  return (
    <>
      <Modal
        size="sm"
        show={isModalOpen}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton onClick={hideModal}>
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
