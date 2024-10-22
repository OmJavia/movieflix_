import Navigation from "../components/Navbar";
import './Fav.css';
import Container from "react-bootstrap/esm/Container";

function Fav() {

  return (
    <>
      <Navigation />

      <Container className="but d-flex align-items-center  flex-column mt-5 ">
        <h1 className="text-white d-flex justify-content-center ">My Favourites</h1>
      </Container>
    </>
  );
}

export default Fav;
