import React from 'react'
import { useEffect } from 'react';





export default function Contact() {
  useEffect(()=>{
    console.log("mounting phase");
    return()=>{
      console.log("unmounting phase");
    }
  }, [])
  return (
    <>
    <div className='container-fluid text-center bg-danger p-4'>
    <h1>Contact</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa corporis sint quasi cumque dolore iste molestias. Magni debitis fugiat voluptas? Totam sunt labore laborum eos magni quos tenetur voluptatem!</p>
    </div>
    </>
  )
}
