import {Button,Row,Col, Container,Card,Navbar,Form,Image,Figure} from 'react-bootstrap';
import { Link} from 'react-router-dom';

import image from '../img/login.jpg';

function Home() {
  return (
    <>
    <Container fluid='sm'>
     <img fluid='sm'
        src={image}  className='img-fluid'/> 

        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Col>
                <Link to="cammovil">
                <Button>Aceder a la camara</Button>
                </Link>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default Home;