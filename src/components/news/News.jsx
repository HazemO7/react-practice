import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function News() {
  const [users, setUsers] = useState([]);

  let getNews = async () => {
    let response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=640fa92145a8457ea9637ed061bded90");
    setUsers(response.data.articles);
 }

 useEffect(()=>{
  getNews();
},[])

return (
  <>
    <h2>News</h2>

    <div className="container">
      <div className="row">
        
        {users.map((newItem, index) => (
          <div key={index} className="col-md-4">
            
            <img
              src={newItem.urlToImage || "https://via.placeholder.com/300"}
              className="w-100"
              alt="news"
            />

            <h6>{newItem.author || "Unknown Author"}</h6>

            <p>{newItem.title}</p>

          </div>
        ))}

      </div>
    </div>
  </>
);
}