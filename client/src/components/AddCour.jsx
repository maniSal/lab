import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { AddCour } from '../JS/actions/courAction';

function Addcour() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [newCour, setNewCour] = useState({
    title: "",
    level: "",
    content: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewCour({ ...newCour, [e.target.name]: e.target.value });
  };

  const handleAddCour = (e) => {
    e.preventDefault();
    dispatch(AddCour(newCour));
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: '#6f42c1',
          borderColor: '#6f42c1',
          borderRadius: '0.5rem',
          padding: '0.5rem 1.5rem',
          fontWeight: '500'
        }}
      >
        Add New Course
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: '#f8f9fa' }}>
          <Modal.Title style={{ color: '#6f42c1' }}>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course title..."
                name="title"
                value={newCour.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter difficulty level..."
                name="level"
                value={newCour.level}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter course content..."
                name="content"
                value={newCour.content}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              type="submit"
              onClick={handleAddCour}
              style={{
                backgroundColor: '#6f42c1',
                borderColor: '#6f42c1',
                width: '100%',
                marginTop: '1rem'
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: 'none' }}>
          <Button
            variant="light"
            onClick={handleClose}
            style={{
              borderColor: '#6c757d',
              color: '#6c757d'
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addcour;
