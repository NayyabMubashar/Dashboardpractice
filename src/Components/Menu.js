import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../Search'

export default function Menu() {
  return (
    <div>
      <Search/>
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
              <Link class="dropdown-item " to="/pages">Property Single</Link>
              <Link class="dropdown-item " to="/blogsingal">Blog Single</Link>
              <Link class="dropdown-item " to="/agentgrid">Agents Grid</Link>
              <Link class="dropdown-item " to="/agentsingal">Agent Single</Link>
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
    </div>
  )
}
