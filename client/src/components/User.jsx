import React, { useId, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ToSupprimer from "./ToSupprimer";



const User = ({ user }) => {
  const [supprimer,setSupprimer]=useState(false)
  

  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
      <Card style={{ width: '25rem' }} className="p-4 shadow">
        <Card.Header 
          as="h5" 
          className="text-center" 
          style={{ 
            backgroundColor: "#6f42c1", 
            color: "white", 
            borderRadius: '0.5rem 0.5rem 0 0' 
          }}
        >
          {user.name}
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title style={{ color: "#9b59b6" }}>{user.email}</Card.Title>
          <Card.Text style={{ color: "#6c757d" }}>{user.phone}</Card.Text>

          <div className="d-grid gap-2 my-3">
            <Button 
              style={{ 
                backgroundColor: "#c0392b", 
                borderColor: "#c0392b", 
                fontWeight: "500" 
              }} 
              className="w-100"
              onClick={() => {
                setSupprimer(true)
              }}
            >
              Delete
            </Button>
            
            <ToSupprimer show={supprimer} handleClose={() => setSupprimer(false)} userId={user._id} />

           
          </div>
        </Card.Body>
      </Card>

     
    </Container>
  );
};

export default User;
