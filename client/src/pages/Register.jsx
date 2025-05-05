import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register } from '../JS/actions/authAction';
import Loading from "../components/Loading";


//
const Register = () => {
  const [newUser,setNewUser] =useState({
    name:"",
    email:"",
    password:"",
    phone:"",

  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoad = useSelector(state=>state.auth.isLoad)
  

  // registe the user in the state : 


  const handleChange =(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  //console.log(newUser)

  const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(register(newUser,navigate))
    
    

  }
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '25rem' }} className="p-4 shadow">
        <Card.Body>
          <Card.Title className="mb-4 text-center">Register</Card.Title>
          {isLoad && <Loading/>}

          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name"name="name" value={newUser.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange}/>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={newUser.password} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" name="phone" value={newUser.phone} onChange={handleChange} />
            </Form.Group>

            <Button style={{ backgroundColor: "#6f42c1", borderColor: "#9b59b6" }} className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;
