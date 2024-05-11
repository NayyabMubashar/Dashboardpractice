import React from 'react';
import { Carousel } from 'react-bootstrap';
import { propertydata } from './Components/Sdata';

const data=[
  {
    id:'1',
    img:"assets/img/post-3.jpg"
  },
  {
    id:'2',
    img:"assets/img/post-2.jpg"
  },
  {
    id:'3',
    img:"assets/img/post-5.jpg"
  },
  {
    id:'4',
    img:"assets/img/post-7.jpg"
  },
]
export default function Carouselcard() {
  return (
    
<Carousel>
  {
    propertydata.map((slide,index)=>(
      <Carousel.Item key={slide.id}>
    
      <img src={slide.image} alt="" class="img-a img-fluid" />

      </Carousel.Item>
    ))
  }
</Carousel>
  );
}