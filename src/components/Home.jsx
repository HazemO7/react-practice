import React from "react"
import { useState } from "react"


export default function Home(){
    let [count, setCount] = useState(0)
    let increaseCount = () => {
        setCount(count + 1)
    }
    let decreaseCount = () => {
        setCount(count - 1)
    }
    
    let [name, setName] = useState("Hazem")
    let changName = ()=>{
        setName("Maher")
    }
    return(
        <>
        <div className="container-fluid text-center bg-warning p-4">

            <h1>Home</h1>
            <h3>{name}</h3>
            <button onClick={changName} className="btn btn-primary" >Change</button>
            <h1>{count}</h1>
            <button onClick={increaseCount} className="btn btn-info">increase</button>
            <button onClick={decreaseCount} className="btn btn-danger">decrease</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, est tenetur dolor quaerat adipisci voluptatem ipsam pariatur voluptatibus repellat recusandae nulla delectus eum amet ullam veniam nostrum corporis, impedit dolore, ipsa eius sunt numquam neque animi inventore! Omnis, est molestias?</p>
        </div>  
        </>
    ) 
}