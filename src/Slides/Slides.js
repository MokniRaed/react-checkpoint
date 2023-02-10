import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slides() {
    
  let images_table = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <>
      <Carousel>
        {images_table.map(el => 
            <Carousel.Item>
          <img
            height="500px"
            width="200px"
            className="d-block w-100"
            src={el}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        )}
        
      </Carousel>
    </>
  );
}

export default Slides;
