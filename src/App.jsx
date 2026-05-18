import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MasterLayout from './components/MasterLayout';
import Home from './components/Home/Home';
import Contact from './components/Contact'
import About from './components/About'
import Products from './components/Products'
import Project from './components/projects/Project'
import News from './components/news/News'
import Meals from './components/meals/Meals'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound'
function App() {
  //routing
  const routes = createBrowserRouter([
  {
    path:'/',
    element:<MasterLayout/>,
    errorElement:<NotFound/>,
    children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>},
      {path:'prod', element:<Products/>},
      {path:'projects', element:<Project/>,
       children:[
        {path:'news', element:<News/>},
        {path:'meals', element:<Meals/>},
       ]

      },
    ]
  }
])

  return (
    <>
    <RouterProvider router={routes}>

    </RouterProvider>
     {/* <MasterLayout/> */}
    </>
  )
}

export default App
