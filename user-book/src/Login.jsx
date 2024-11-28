import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
const Login = () => {
  let [show, setShow] = useState(true);
  let [login, setLogin] = useState(true);
  let [signup, setSignup] = useState(false);
  let [title ,setTitle]= useState("Login")
  const handleClose = () => {
    setShow(false);
    window.location.reload(); //to refresh the page
  };
  function showSignUpModal() {
    setLogin(false)
    setSignup(true)
    setTitle("Signup")
  }
  function showLoginModal() {
    setLogin(true)
    setSignup(false)
    setTitle("Login")
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { login &&
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password"></Form.Control>
            </Form.Group>
            <Button varient="dark">Login</Button>
            <p>
              Don't have account{" "}
              <span style={{ marginLeft: "10px" }} onClick={showSignUpModal}>
                Signup
              </span>
            </p>
          </Form>
        }
        {signup &&
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile No"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email"></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Enter Password"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control type="text" placeholder="Confirm Password"></Form.Control>
            </Form.Group>
            <Button varient="dark">Signup</Button>
            <p>
              Already has an account 
              <span style={{ marginLeft: "10px" }} onClick={showLoginModal}>
                Login
              </span>
            </p>
          </Form>
        }
      </Modal.Body>
    </Modal>
  );
};

export default Login;
