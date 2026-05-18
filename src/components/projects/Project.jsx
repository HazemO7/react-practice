import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function project() {
  return (
    <div>
        <h1>Projects</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li className='nav-item'>
                            <Link className='nav-link' to='news'>News</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='meals'>Meals</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}
