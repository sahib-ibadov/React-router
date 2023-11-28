import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import ROUTES from './routes/index.routes'
import { Toaster } from 'react-hot-toast'
const router =createBrowserRouter(ROUTES)



function App() {
  

  return (
   <>
   <RouterProvider router={router}/>
   <Toaster/>
   </>
  )
}

export default App
