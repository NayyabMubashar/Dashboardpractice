import React from 'react'

export default function TestmonialCard(props) {
  return (
    <div>
      <div id="testimonial-carousel" class="swiper">
          <div class="swiper-wrapper">

            <div class="carousel-item-a swiper-slide">
              <div class="testimonials-box">
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="testimonial-img">
                      <img src={props.image} alt="" class="img-fluid"/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="testimonial-ico">
                      <i class="bi bi-chat-quote-fill"></i>
                    </div>
                    <div class="testimonials-content">
                      <p class="testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                        debitis hic ber quibusdam
                        voluptatibus officia expedita corpori.
                      </p>
                    </div>
                    <div class="testimonial-author-box">
                      <img src="assets/img/mini-testimonial-1.jpg" alt="" class="testimonial-avatar"/>
                      <h5 class="testimonial-author">{props.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           

          </div>
        </div>
    </div>
  )
}
