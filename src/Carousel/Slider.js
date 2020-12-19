import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/esm/Button';

class Slider extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel>
                   <Carousel.Item>
                       <img
                             src="1.jpg"  height="100%" width="100%"
                            alt="1"
                        />
    <Carousel.Caption>
      <h3 style={{color:"black"}}>Web design and Development</h3>
      <p  style={{color:"black"}}>We design experience for your customer that
they will love to stay a little more with you.</p>
    <Button variant="btn btn-success">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src="2.jpg" height="100%" width="100%"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"black"}}>HR SOFTWARE</h3>
      <p style={{color:"black"}}>We are providing robust Hr & payroll software in Bangladesh</p>
      <Button variant="btn btn-success">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src="3.jpg" height="100%" width="100%"
      alt="Third slide"
    />

                         <Carousel.Caption>
                             <h3 style={{color:"black"}}>Software development company in Bangladesh</h3>
                              <p style={{color:"black"}}>More than 9+ years experience of developing
                              performing software for your business</p>
                        <Button variant="btn btn-success">Learn More</Button>
                          </Carousel.Caption>
                      </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slider;