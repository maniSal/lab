import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux'
import { deleteUser } from "../JS/actions/userAction";
const ToSupprimer =({show,handleClose,userId})=>{

    const dispatch = useDispatch ()
    const handleDelete =()=>{

        dispatch(deleteUser(userId))
        console.log("Deleting user with ID:", userId); // Debug
        handleClose()
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You Want To Delete This User ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}


export default ToSupprimer