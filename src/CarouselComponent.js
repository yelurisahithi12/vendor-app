import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4e2d01dbe0f907d2.jpg?q=20"
          alt="First slide"
        />
        <Carousel.Caption>
         
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/db8559478c4a4a55.jpg?q=20"
          alt="Second slide"
        />
        <Carousel.Caption>
         
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cd7e0e8136e0584f.jpg?q=20"
          alt="Third slide"
        />
        <Carousel.Caption>
         
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
