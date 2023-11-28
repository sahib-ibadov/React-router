import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar__main'>
        <ul className='navbarx__ul'>
          <li>
          <Link style={{textDecoration:'none',  color:'white'} } to='/'>Home</Link>
          </li>
          <li>
          <Link  style={{textDecoration:'none',color:'white'}} to='/Myproducts'>Myproducts</Link>
          </li>
          <li>
          <Link  style={{textDecoration:'none',color:'white'}} to='/Favorites'>Favorites</Link>
          </li>
          <li>
          <Link  style={{textDecoration:'none',color:'white'}} to='/Admin'>Admin</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar
