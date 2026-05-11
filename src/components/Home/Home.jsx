import React from "react"
import { useEffect , useState } from "react"
import './Home.css'

export default function Home(){
    let [count, setCount] = useState(10)

    let [Salary, setSalary] = useState(1000)

    let changSalary = ()=>{
        setSalary(8000)
    }

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
 

    useEffect(()=>{
        if(Salary!==1000){
            console.log("increasing salary");
        }
    }, [ Salary])
    


    useEffect(()=>{
        if(count!==10 ){
            console.log("changing count");
        }
    }, [count ])
    
 
 

    return(
        <>
        <div className="container-fluid text-center bg-warning p-4">

            <h1 className= 'test'>Home</h1>
            <h3>{name}</h3>
            <button onClick={changName} className="btn btn-primary" >Change</button>
            <h1>{count}</h1>
            <h1>salary is {Salary}</h1>
            <button onClick={increaseCount} className="btn btn-info">increase</button>
            <button onClick={decreaseCount} className="btn btn-danger">decrease</button>
            <button onClick={changSalary} className="btn btn-success">increase salary</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, est tenetur dolor quaerat adipisci voluptatem ipsam pariatur voluptatibus repellat recusandae nulla delectus eum amet ullam veniam nostrum corporis, impedit dolore, ipsa eius sunt numquam neque animi inventore! Omnis, est molestias?</p>
        </div>  
        </>
    ) 
}