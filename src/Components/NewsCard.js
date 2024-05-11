import React from 'react'

export default function NewsCard(props) {
  return (
    <div>
       <div id="news-carousel" class="swiper">
          <div class="swiper-wrapper">

            <div class="carousel-item-c swiper-slide">
              <div class="card-box-b card-shadow news-box">
                <div class="img-box-b">
                  <img src={props.image} alt="" class="img-b img-fluid"/>
                </div>
                <div class="card-overlay">
                  <div class="card-header-b">
                    <div class="card-category-b">
                      <a href="#" class="category-b">{props.titleA}</a>
                    </div>
                    <div class="card-title-b">
                      <h2 class="title-2">
                        <a href="blog-single.html">{props.title}
                          <br/> new</a>
                      </h2>
                    </div>
                    <div class="card-date">
                      <span class="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           


            

          </div>
        </div>
        <div class="news-carousel-pagination carousel-pagination"></div>
      </div>
    
  )
}
