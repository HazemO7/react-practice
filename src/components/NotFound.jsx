import React from 'react'
import notFound from '../assets/Card.png'
export default function  () {
  return (
    <div>
        <h1 className='bg-danger text-center p-3'>your requst not exist</h1>
        <img src={notFound} alt='not found'></img>
    </div>
  )
}
