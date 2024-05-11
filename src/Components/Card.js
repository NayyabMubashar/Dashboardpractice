import React from 'react'


export default function Card(props) {
  return (
    <div>
            <div class="">
            <div class="card-box-c foo">
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span class={props.icon}></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c">{props.title}</h2>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c" style={{fontSize:'20px'}}>
                  {props.content}
                </p>
              </div>
              <div class="card-footer-c">
                <a href="#" class="link-c link-icon">Read more
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
         </div>
      
    
      
  )
}
