
import React from 'react'
import Navbar from '../../layout/Admin/Navbar/Navbar'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Outlet/>   
    </React.Fragment>
  )
}

export default AdminRoot
