import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Intersection(props) {
  return (
    <>
   <div class="intro intro-carousel swiper position-relative">

<div class="swiper-wrapper">

  <div class="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: "url(assets/img/slide-1.jpg)"}}>
    <div class="overlay overlay-a"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="intro-body">
                <p class="intro-title-top">{props.title}
                  <br/> 78345
                </p>
                <h1 class="intro-title mb-4 ">
                  <span class="color-b">204</span> {props.maintitle}
                  <br/>{props.titlebr}
                </h1>
                <p class="intro-subtitle intro-price">
                  <a href="#"><span class="price-a">{props.price}</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
    </>
  )
}
