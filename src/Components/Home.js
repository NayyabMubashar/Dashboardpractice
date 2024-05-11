import React from 'react'
import { Link } from 'react-router-dom'
import Intersection from './Intersection'
import Service from './Service'
import Footer from './Footer'
import Menu from './Menu'
import Card from './Card'

import AgentCard from './AgentCard'
import { Sdata,Agentdata,NewsDtata ,propertydata} from './Sdata'
import NewsCard from './NewsCard'
import TestmonialCard from './TestmonialCard'
import PropertyCard from './PropertyCard'
import Carouselcard from '../Carousel'


export default function Home() {
  return (
    <div>
   
     
    <Menu/>
  {/* Intersection */}
  <Intersection 
  image="slide-1.jpg"
  title="Doral, Florida " 
  maintitle="Mount"
  titlebr="Olive Road Two"
  price="rent | $ 12.000"/>


  
  <section class="section-services section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
<div className='row'>
{Sdata.map((val,index)=>(
    <div key={index} className="col-md-4"><Card 
            title={val.title}
             content={val.content} 
              icon={val.icon}
               footer={val.footer} /></div>
      ))}
       </div> </div>               
      </div>
    </section>
    
    <PropertyCard


/>

    <section class="section-agents section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Best Agents</h2>
              </div>
              <div class="title-link">
                <a href="agents-grid.html">All Agents
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
  
      <div className='row'>
       {Agentdata.map((val,index)=>(
      
        <div key={index} className='col-md-4'>
        <AgentCard
       image={val.image}
       name={val.name}
       namebr={val.namebr}
       content={val.content}
       phone={val.phone}
       email={val.email}
       row={val.row}
       
       />
        </div>

       ))}</div>
      </div>
    </section>

    
    <section class="section-news section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-14">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Latest News</h2>
              </div>
              <div class="title-link">
                <a href="blog-grid.html">All News
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
</div>
<div className='container'>
  <div className='row'>
{NewsDtata.map((val,index)=>(
  <div key={index} className='col-md-4'>
    <NewsCard
image={val.image}
title={val.title}
titleA={val.titleA}

/>
   </div> 
    


))}</div></div>
 </section>
    <section class="section-testimonials section-t8 nav-arrow-a">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Testimonials</h2>
              </div>
            </div>
          </div>
        </div>

        <TestmonialCard
        image="assets/img/testimonial-1.jpg"
        name="Albert & Erika"/>
        <TestmonialCard
        image="assets/img/testimonial-2.jpg"
        name="Pablo & Emma"/>
        <div class="testimonial-carousel-pagination carousel-pagination"></div>

      </div>
    </section>
                  <Footer/>
  
    </div>

    
    
  )
}
