import React from 'react'
import { Sdata, propertydata } from './Sdata'


export default function PropertyCard() {
  return (
    <div>
      <section class="section-property section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Latest Properties</h2>
              </div>
              <div class="title-link">
                <a href="property-grid.html">All Property
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  <div className='container'>
      <div className='row'>
      {propertydata.map((val,index)=>(

<div key={index} className='col-md-4' >
  
      
      <div id="property-carousel" class="swiper">
          <div class="swiper-wrapper">

            <div class="carousel-item-b swiper-slide ">
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src={val.image} alt="" class="img-a img-fluid"/>
                </div>
                <div class="card-overlay col-md-4">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="property-single.html">{val.title}
                          <br /> {val.titlebr}</a>
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <div class="price-box d-flex">
                        <span class="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="#" class="link-a">Click here to view
                        <span class="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        </div>
    
        </div>
      ))}</div></div>
      
        <div class="propery-carousel-pagination carousel-pagination"></div>
    </div>
  )
}
