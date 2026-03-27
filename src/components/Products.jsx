import React, { useState } from 'react'
import Product from './Product'
export default function Prodcuts(){
    
    // let products = [
    //     {id:1, name:"product 1", category:"Electronics", price:100, onSail:true},
    //     {id:2, name:"product 2", category:"Clothing", price:200, onSail:false},
    //     {id:3, name:"product 3", category:"Books", price:300, onSail:true},
    //     {id:4, name:"product 4", category:"Home", price:400, onSail:false},
    //     {id:5, name:"product 5", category:"Toys", price:500, onSail:true},
    // ];
    let [products, setProducts] = useState([
        {id:1, name:"product 1", category:"Electronics", price:100, onSail:true},
        {id:2, name:"product 2", category:"Clothing", price:200, onSail:false},
        {id:3, name:"product 3", category:"Books", price:300, onSail:true},
        {id:4, name:"product 4", category:"Home", price:400, onSail:false},
        {id:5, name:"product 5", category:"Toys", price:500, onSail:true},
    ]);

    let updateProduct = (currentProd)=>{
        currentProd.price += 100;
        setProducts([...products]);

    } 
    let deleteProduct = (currentProd)=>{
        let currnetIndex = products.indexOf(currentProd)
        products.splice(currnetIndex, 1  )
        setProducts([...products]);
    }

    return(
        <>
        
 
        <div className="container">
            <div className="row">
                {products.map((product)=>(
                    <Product key={product.id} productInfo={product} deleteProduct={deleteProduct} updateProduct={updateProduct}  />
                ))}
            </div>
        </div>
      
        </>  
    )
}