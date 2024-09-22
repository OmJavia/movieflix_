import Navigation from "../components/Navbar";
import './Home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Movies() {
  const [data, setData] = useState([]);
  const [poster, setPoster] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPoster, setSelectedPoster] = useState('');


  const API_KEY = 'c848f0d8';
  const BASE_URL = 'https://www.omdbapi.com';
  const year2 = '2021'

  // FOR MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (title, year, poster, plot) => {
    setSelectedTitle(title);
    setSelectedYear(year);
    setSelectedPoster(poster);

    setShow(true);
  };
    useEffect(()=>{
      console.log("heyy");
      handleClick()
      
    })

  async function handleClick() {
    let apiData = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=movie&y= ${year2}`);
    const movies = apiData.data.Search;
    const movieTitles = movies.map((movie) => movie.Title);
    const moviePoster = movies.map((movie) => movie.Poster);
    const movieYear = movies.map((movie) => movie.Year);
    setData(movieTitles);
    setPoster(moviePoster);
    setYear(movieYear);
  }

    // Handle the select change event
    // const handleYearChange = (event) => {
    //   const selectedYear = event.target.value;
    //   if (selectedYear !="Year") {
    //     handleClick(selectedYear);
    //   }
    // };

  return (
    <>
      <Navigation />

      <Container className="but d-flex align-items-center  flex-column mt-5 ">
        <h1 className="text-white d-flex justify-content-center ">Some of Good Movies </h1>
      </Container>
      <Container className=" but2 d-flex justify-content-center">
        <Row className="justify-content-center">
          {data.map((title, index) => (
            <Card
              onClick={() => handleShow(title, year[index], poster[index])}
              style={{ width: "15rem" }}
              key={index}
              className="mx-2 my-3 bg-dark text-white px-0 "
            >
              <Card.Img style={{ width: '100%', height: '300px', objectFit: 'cover' }} variant="top" src={poster[index]} alt="Card image" />
              {/* <Card.ImgOverlay> */}
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  Year: {year[index]}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              {/* </Card.ImgOverlay> */}
            </Card>
          ))}
        </Row>
      </Container>



      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center" >
            <img src={selectedPoster} alt={selectedTitle} style={{ width: '50%' }} />
            <hr></hr>
            {/* <p>Year: {selectedYear}</p> */}

          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="outline-success" onClick={handleClose}>
              Details
            </Button>

          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Movies;
