import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Webcam from 'react-webcam';

function Cam() {
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
    <Container fluid='sm' >
      <Webcam audio={false} video={camera} ref={webcamRef} />
      <button onClick={handleTakePhoto}>Tomar foto</button>
      {imageSrc && <img src={imageSrc} alt="Captura de pantalla" />}
      </Container>
    </>
  );
}
export default Cam;