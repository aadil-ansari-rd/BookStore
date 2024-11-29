import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  let [show, setShow] = useState(true);
  let [login, setLogin] = useState(true);
  let [signup, setSignup] = useState(false);
  let [title, setTitle] = useState("Login");
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
  });
  let [confirmPassword, setConfirmPassword] = useState("");
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const handleClose = () => {
    setShow(false);
    window.location.reload(); //to refresh the page
  };
  function showSignUpModal() {
    setLogin(false);
    setSignup(true);
    setTitle("Signup");
  }
  function showLoginModal() {
    setLogin(true);
    setSignup(false);
    setTitle("Login");
  }
  function addUser() {
    if (user.password !== confirmPassword) {
      alert("Password and confirm password does not match");
    } else {
      axios({
        url: "http://localhost:3000/add/user",
        method: "post",
        data: user,
      })
        .then((res) => { 
          if (res.data.success) {
            alert("SignUp has been successfully done . Please Login ");
            setLogin(true)
            setSignup(false)
            setTitle("login")
          }
        })
        .catch((err) => {
          console.log(err.message)
          alert(err.response.data.message)
          handleClose()
        });
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {login && (
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
              <span
                style={{ marginLeft: "10px", color: "blue" }}
                onClick={showSignUpModal}
              >
                Signup
              </span>
            </p>
          </Form>
        )}
        {signup && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="firstName"
                placeholder="Enter First Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="lastName"
                placeholder="Enter Last Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="mobileNo"
                placeholder="Enter Mobile No"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="Enter Email"
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button varient="dark" onClick={addUser}>
              Signup
            </Button>
            <p>
              Already has an account
              <span
                style={{ marginLeft: "10px", color: "blue" }}
                onClick={showLoginModal}
              >
                Login
              </span>
            </p>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Login;
