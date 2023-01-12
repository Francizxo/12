import { useState} from 'react'
import {Carousel} from 'react-bootstrap';


function Carrusel ({data}){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return(
    <>  
        {console.log(data)}
        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
        {data &&  data.map((item)=>(
        <Carousel.Item key={item.id}>
          <img
          style={{maxHeight:'100vh'}}
            className="d-block w-100"
            src={item.webformatURL}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
            </Carousel.Item>
            ))}             
          </Carousel>
    </>
    )

}
export default Carrusel