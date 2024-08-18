import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
const MovieAdd = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleAddMovie = () => {
    let id = Math.random();
    add({ id, title, description, rate, posterUrl });
    console.log(id, title, description, rate, posterUrl);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="texte"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please enter a title for your movie.
          </Form.Text>
          <Form.Control
            type="texte"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please enter a description for your movie.
          </Form.Text>
          <Form.Control
            type="texte"
            placeholder="Enter rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please enter a rate for your movie (1-5).
          </Form.Text>
          <Form.Control
            type="texte"
            placeholder="Enter poster URL"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please enter a poster URL for your movie.
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieAdd;
