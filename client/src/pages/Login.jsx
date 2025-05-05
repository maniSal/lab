import React, { use, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { login } from '../JS/actions/authAction';
import Loading from "../components/Loading";

const Login = () => {
  const [user,setUser]=useState({
    email:"",password:""
  })
const dispatch = useDispatch()
const navigate = useNavigate()
const isLoad = useSelector(state=>state.auth.isLoad)
  
const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}

const handleLogin =(e)=>{
  e.preventDefault()
  dispatch(login(user,navigate))
}
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '25rem' }} className="p-4 shadow">
        <Card.Body>
          <Card.Title className="mb-4 text-center">Login</Card.Title>
          {isLoad && <Loading/>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
              <Form.Text className="text-muted">
               
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"name="password" value={user.password} onChange={handleChange} />
            </Form.Group>


            <Button style={{ backgroundColor: "#6f42c1", borderColor: "#9b59b6" }}className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
