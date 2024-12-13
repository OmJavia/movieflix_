import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const API_KEY = 'c848f0d8';
const BASE_URL = 'https://www.omdbapi.com';

function Navigationbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]); 

  const handleClick = async () => {
    try {
      let apiData = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
      const movies = apiData.data.Search;
      if (movies) {
        setMovies(movies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">Movie-Flix</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href="/">Trending</Nav.Link>
              <Nav.Link href="Series">Series</Nav.Link>
              <Nav.Link href="Movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                type="search"
                placeholder="Enter Movie Name"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}  />
              <Button variant="outline-primary" onClick={handleClick} style={{ marginRight: "10px" }}>Search</Button> 
              <Button variant="outline-success" onClick={handleShow}>Login</Button>
              
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                autoFocus/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Sign Up
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Col key={movie.imdbID} sm={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No movies found with the name you searched.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Navigationbar;
