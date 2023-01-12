import React, { useState, useEffect } from 'react';
import { Container, Row ,Col,Card,Nav,Navbar} from 'react-bootstrap';

import Carrusel from '../components/CarruselClientes';
import useData from '../Hooks/api';
import image from '../img/logo.png';
import image2 from '../img/banner.jpg';
import image3 from '../img/qr.png';

function Carruselnav() {
  const data = useData();
  return (
    <div style={{position: 'relative'}}>
      <Carrusel data={data} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}/>
      <img src={image}  style={{position: 'absolute', left: '10px', top: '10px',maxHeight:'20vh'}} />
      <img src={image2}  style={{position: 'absolute', left: '25%',right: '25%', bottom: '20px',maxHeight:'20vh'}} />
      <img src={image3}  style={{position: 'absolute', right: '20px', bottom: '20px',maxHeight:'20vh'}} />
    </div>
  );
}

export default Carruselnav;