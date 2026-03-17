import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Products from './Products'
import { Outlet } from 'react-router-dom'


export default function MasterLayout() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quidem sapiente quaerat inventore. Qui facere earum, nostrum aliquid, sit eum reiciendis et nobis esse explicabo ducimus iusto architecto accusamus ipsa.</p>
            </div>
            <div className="col-md-9"><Outlet/></div>
        </div>
    </div>
        
    <Footer/>
    </>
  )
   
     
   
  
}
