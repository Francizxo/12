import React, { useState, useEffect } from 'react';
import { Container, Row ,Col,Card,Nav,Navbar} from 'react-bootstrap';

import Carrusel from '../components/CarruselProductos';
import useData from '../Hooks/api';

function Index() {
  const data = useData();
  
  return (
  <>
  <body style={{ backgroundColor: '#A9EE74' }}>
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Index">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Upload">Subir foto</Nav.Link>
            <Nav.Link href="#Carrusel">Carrusel</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Login">Ingresar</Nav.Link>
            <Nav.Link href="#deets">Registrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid='sm' >
        <Carrusel data={data} />
      </Container>
        <Row>
          {data && data.map(image => (
            <Col key={image.id}>
              <Card style={{ width: '200px', height: '200px', backgroundColor: 'black' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Card.Img style={{ objectFit: 'cover' }} src={image.webformatURL} alt={image.tags} key={image.id} />
                </div>
              </Card> 
            </Col>
          ))}
        </Row>
    </Container>
    </body>
  </>
  );
}

export default Index;