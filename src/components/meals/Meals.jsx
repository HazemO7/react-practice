import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Meals() {
  const [meals, setMeals] = useState([]);
  let getMeals = async() => {
    let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    setMeals(response.data.categories);
  }

  useEffect(()=>{
    getMeals();
  },[])

  return (
    <>
    <h2>Meals</h2>
    <div className="container">
      <div className="row">
        {meals.map((meal) => (
          <div key={meal.idCategory} className="col-md-4">
            <img  src={meal.strCategoryThumb} alt={meal.strCategory} className="img-fluid"/>
            <h3>{meal.strCategory}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
    

  )
}
