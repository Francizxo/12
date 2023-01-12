import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { MediaQuery } from 'react-responsive';
import {Button,Row,Col, Container,Card,Navbar,Form,Image,Figure} from 'react-bootstrap';
import { Link} from 'react-router-dom';

function Cammovil() {
  const [camera, setCamera] = useState(null);
  const [permission, setPermission] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  useEffect(() => {
    async function getCamera() {
      const permission = await navigator.permissions.query({ name: 'camera' });
      setPermission(permission.state);
      if (permission.state === 'granted') {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCamera(stream);
      } else {
        window.alert('Por favor, conceda permiso para acceder a la cámara.');
      }
    }
    getCamera();
  }, []);

  function handleTakePhoto(event) {
    event.preventDefault();
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  }

  return (
    <>
    <Container>
      <Webcam audio={false} video={camera} ref={webcamRef} />
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Col>
                <Link to="Exito">
                <Button>Subir imagen</Button>
                </Link>
                <Link to="Fallo">
                <Button>Subir imagen</Button>
                </Link>
            </Col>
        </Row>
    </Container>    
    </>
  );
}
export default Cammovil;