import React from 'react'
import Menu from './Menu'

export default function News({title,description,src,url}) {
  <Menu/>
  return (
    
    <div className='card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2' style={{maxWidth: "345px"}}>
          
  <img src={src} style={{height:"200px" , width:"320px"}}/>
  <div class="card-body">
    <h5 class="card-title">{title.slice (0,50)}.....</h5>
    <p class="card-text">{description?description.slice(0,50):"Hello there are some description that i want to display"}</p>
    <a href={url} class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
  
  )
}
