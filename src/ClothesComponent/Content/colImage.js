import React from "react";
import"./cards.css";
import Carousel from"react-bootstrap/Carousel";
import image from"../image/dresses.jpeg";
import image1 from"../image/blouses1.jpg";
import image2 from"../image/shirt1.jpg";
import image3 from"../image/blouses4.jpeg"
import image4 from"../image/blouses5.jpg"
import image5 from"../image/blouses6.jpg"
import image6 from"../image/blouses7.jpg"
import image7 from"../image/blouses8.jpg"
import image8 from"../image/blouses9.jpg"
import image9 from"../image/blouses4.jpeg"
import image10 from"../image/dresses.jpeg"
import image11 from"../image/blouses1.jpg"


function CardImage(){
    return(
        <div className="container">
        <div className="title">
        <h1>new arrivals</h1>
        <p>Get the latest styles</p>
        </div>
        <div className="carouselCol">
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="image"
      src={image}
      alt="First slide"
    />
    <img
      className="image"
      src={image1}
      alt="First slide"
    />
    <img
      className="image"
      src={image2}
      alt="First slide"
    />
    <img
      className="image"
      src={image3}
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={image4}
      alt="Second slide"
    />
    <img
      className="image"
      src={image5}
      alt="Second slide"
    />
    <img
      className="image"
      src={image6}
      alt="Second slide"
    />
    <img
      className="image"
      src={image7}
      alt="Second slide"
    />
    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src={image8}
      alt="Third slide"
    />
    <img
      className="image"
      src={image9}
      alt="Third slide"
    />
    <img
      className="image"
      src={image10}
      alt="Third slide"
    />
    <img
      className="image"
      src={image11}
      alt="Third slide"
    />
    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
        </div>
        <div className="title">
        <h1> new product  </h1>
        <p>Shopping

        </p>
        </div>
        
        </div>
    );
}
export default CardImage