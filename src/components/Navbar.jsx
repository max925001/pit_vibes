import React from 'react'
import './navbar.css'
import logo_image from '../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
function Navbar() {
    const [isVisible ,setIsvisible] =useState(false)
    const handleVisble = () =>{
        console.log(isVisible)
        setIsvisible(!isVisible)
    }
  return (
    <header className='navbar'>
   <div className="logo"><img src={logo_image} alt=""  className='logo_image'/></div>
   <div className={`menu ${isVisible? 'visible':''}`}   >

    <div className='sub_menu'>
        <div>Home</div>
        <div>About Us</div>
        <div>Categories</div>
        <div>Contact</div>
    </div>
   </div>
   <div className="menu_bar" onClick={handleVisble}><IoMdMenu/></div>
    </header>
  )
}

export default Navbar
