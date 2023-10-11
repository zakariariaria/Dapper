import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import "../Styles/SelectClothes.css";
import style1 from '../Images/streetwear1.webp';
import style2 from '../Images/streetwear1.webp';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';



export default function SelectClothes() {
    const [selectedGender, setSelectedGender] = useState('Male');
    const [selectedSize, setSelectedSize] = useState('Medium');

    const styles = [
        style1,
        style2,
        
        // ... add more style images
    ];

    return (
      
            <MDBCarousel showIndicators showControls fade>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
              >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </MDBCarouselItem>
        
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                alt='...'
              >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselItem>
        
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                alt='...'
              >
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </MDBCarouselItem>
            </MDBCarousel>
         

    );
}
