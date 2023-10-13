import React from 'react'
import logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
const navbar = () => (
    <div className='navbar'>
        <div className='left_side'>
            <img src={logo} alt='' />
        </div>
        <div className='right_side'>
         <Link to="/">Home</Link>
         <Link to="/menu">Menu</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
        </div>
    </div>
  )

export default navbar