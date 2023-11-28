import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
import axios from 'axios'
import Mytable from '../Table/Mytable'
import toast from 'react-hot-toast'


const Navbar = () => {
 
  
  return (
    
    
    <div>
      
 
      <div className='Admin__Navbar'>
      
      
        <ul>
          <li>
            <Link style={{textDecoration:'none',color:'white'}} to="/">Home</Link>
          </li> 
          <li>
            <Link style={{textDecoration:'none',color:'white'}} to="AddProduct">AddProduct</Link>
          </li>
        
        
        </ul>


       

      </div>
    
    </div>
  )
}

export default Navbar 
