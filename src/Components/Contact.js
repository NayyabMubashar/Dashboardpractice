import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Contactsingle from './Contactsingle'

export default function Contact() {
  return (
    <>
    
      <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div class="container">
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a class="navbar-brand text-brand" to="index.html">Estate<span class="color-b">Agency</span></a>

      <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul class="navbar-nav">

          <li class="nav-item">
            <Link class="nav-link active" to="/">Home</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link " to="/about">About</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link " to="/property">Property</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link " to="/blog">Blog</Link>
          </li>

          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
            <div class="dropdown-menu">
              <Link class="dropdown-item " to="property-single.html">Property Single</Link>
              <Link class="dropdown-item " to="blog-single.html">Blog Single</Link>
              <Link class="dropdown-item " to="agents-grid.html">Agents Grid</Link>
              <Link class="dropdown-item " to="agent-single.html">Agent Single</Link>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
        <i class="bi bi-search"></i>
      </button>

    </div>
  </nav>

  <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Contact US</h1>
              <span class="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <Contactsingle/>
    <Footer/>

    
    </>
     
  )
}
