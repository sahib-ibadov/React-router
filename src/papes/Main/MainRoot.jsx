 
import React from 'react'
import Navbar from '../../layout/Main/Navbar/Navbar'
import { Outlet} from 'react-router'
import Footer from '../../layout/Main/Footer/Footer'
const MainRoot = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default MainRoot


