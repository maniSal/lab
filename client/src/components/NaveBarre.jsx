import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaBookOpen } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/actions/authAction";
import { useNavigate } from "react-router-dom";


const NaveBarre =()=>{
  const isAuth = useSelector(state=>state.auth.isAuth)
  const user = useSelector(state=>state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(
        <div>
         <Navbar style={{ backgroundColor: "#6f42c1" }} expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2 text-white">
          <FaBookOpen size={28} />
          E-Learning
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
             {isAuth ?
             (<>
              <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
              <Button  style={{ backgroundColor: "#9b59b6", borderColor: "#9b59b6" }} className="px-3" onClick={()=>dispatch(logout(navigate))}>
              LogOut
            </Button>
           
             </>):
             (
              <>
               <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
               <Nav.Link href="#contact" className="text-white">Contact Us</Nav.Link>
               <Button href="/login" variant="light" className="px-3">
              Login
            </Button>
            <Button href="/register" style={{ backgroundColor: "#9b59b6", borderColor: "#9b59b6" }} className="px-3">
              Register
            </Button>
           
              </>

             )
            }
         {user.isAdmin &&  
          <>
          <Button href="/admin" style={{ backgroundColor: "#9b59b6", borderColor: "#9b59b6" }} className="px-3">
              Dashboard
            </Button>
            <Button href="/addcours" style={{ backgroundColor: "#9b59b6", borderColor: "#9b59b6" }} className="px-3">
              Add Cours 
            </Button>
           

          </>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        </div>
    )
}

export default NaveBarre;