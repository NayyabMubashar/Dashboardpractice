import React, { useEffect, useState } from 'react'
import News from './News'

export default function Latest() {
  const [articles,setArticles]=useState([]);
useEffect(()=>{
  let url=` https://newsapi.org/v2/top-headlines?country=us&apiKey=1e0b381d5b754d4a9a24ebb0f642e574`
fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles))


},[])

  return (<>
    <div>
      <h1 className='text-center bg-secondary'>Welcome to NewsChannal</h1>
      {articles.map((news,index)=>{
      return(
        <News  key={index} title={news.title} description={news.description} src={news.urlToImage}  url={news.url}/>
      )
      })}


    
    
      
    </div>
 </> )
}
