import Navigationbar from "../components/Navbar";
import './Tvshows.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cardmodal from '../components/Moviecard';
import Col from 'react-bootstrap/esm/Col';

function Tvshow(){
    return(
        <div className="my-background" >
        <Navigationbar/>
        <Container className='moviecon '>
            <Row >
                <Col>
                <h1>This is for tv show </h1>
                
                </Col>
            </Row>     
        </Container>
      </div>
    )

}

export default Tvshow;