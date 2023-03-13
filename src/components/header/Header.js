import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Register from "../register/Register";
import React, { useState } from "react";
import Login from "../login/Login";
import Modal from "react-bootstrap/Modal";

const Header = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegisterClose = () => setShowRegisterModal(false);
  const handleRegisterShow = () => setShowRegisterModal(true);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClose = () => setShowLoginModal(false);
  const handleLoginShow = () => setShowLoginModal(true);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "gold" }}>
            <FontAwesomeIcon icon={faVideoSlash} />
            Gold
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/watchList">
                Watch List
              </NavLink>
            </Nav>
            <Button
              variant="outline-info"
              className="me-2"
              onClick={handleLoginShow}
            >
              Login
            </Button>
            <Button variant="outline-info" onClick={handleRegisterShow}>
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showRegisterModal} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>

      <Modal show={showLoginModal} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
