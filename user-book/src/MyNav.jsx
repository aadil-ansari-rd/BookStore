import React from 'react'
import {Container, Nav,  Navbar ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login' 
import { useState } from 'react'
const MyNav = () => {
    let[showModal , setShowModal] =useState(false)
  return (
    <div>
      <Container fluid>
        <Navbar bg='dark' data-bs-theme='dark' >
            <Navbar.Brand className='ms-5'>
               <h1> Book Store</h1>
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
                <Nav.Link href=''></Nav.Link>
                <Nav.Link href=''></Nav.Link>
                
            </Nav>
            <Navbar.Text >
                <Button className='me-5' onClick={()=> setShowModal(true)}>Login / Sign in</Button>
            </Navbar.Text>
        </Navbar>
        {
            showModal && <Login>   </Login>
        }
      </Container>
    </div>
  )
}

export default MyNav
