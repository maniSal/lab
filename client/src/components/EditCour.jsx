import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editCour } from '../JS/actions/courAction';

function EditCour({cour}) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [courToEdit,setcourToEdit]=useState({
    title: cour.title,
    level: cour.level,
    content: cour.content
  })

  const dispatch = useDispatch()

  //console.log(courToEdit)
  const handleChange = (e) => {
    setcourToEdit({ ...courToEdit, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editCour(cour._id, courToEdit));
    handleClose();
  };
  
  return (
    <>
      <Button  style={{
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8",
        borderRadius: "2rem",
        padding: "0.5rem 1.5rem",
        fontWeight: "500",
        minWidth: "100px",
        color: "white",
      }}
      variant="info" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit The Cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course title..."
                name="title"
                value={courToEdit.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter difficulty level..."
                name="level"
                value={courToEdit.level}
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
                value={courToEdit.content}
                onChange={handleChange}
              />
            </Form.Group>

            
          </Form></Modal.Body>
        <Modal.Footer>
        <Button
  style={{
    backgroundColor: '#9b59b6',
    borderColor: '#9b59b6',
    width: '100%',
    marginBottom: '0.5rem',
    color: 'white'
  }}
  onClick={handleClose}
>
  Close
</Button>

<Button
  style={{
    backgroundColor: '#6f42c1',
    borderColor: '#6f42c1',
    width: '100%',
    color: 'white'
  }}
  onClick={handleEdit}
>
  Save Changes
</Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCour;