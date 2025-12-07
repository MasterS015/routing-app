import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
        <div className="text-3xl justify-center display-flex ">Your Logo</div>
        <div className="display-flex gap-15">
            <NavLink className="text-2xl m-2 p-2 rounded-xl shadow-sm shadow-b;ack-300 hover:bg-gray-200 border-black " to="/">Home</NavLink>
            <NavLink className="text-2xl m-2 p-2 rounded-xl shadow-sm shadow-b;ack-300 hover:bg-gray-200 border-black" to="/about">About</NavLink>
            <NavLink className="text-2xl m-2 p-2 rounded-xl shadow-sm shadow-b;ack-300 hover:bg-gray-200 border-black" to="/contact">Contact</NavLink>
            <NavLink className="text-2xl m-2 p-2 rounded-xl shadow-sm shadow-b;ack-300 hover:bg-gray-200 border-black" to="/services">Services</NavLink>
            <NavLink className="text-2xl m-2 p-2 rounded-xl shadow-sm shadow-b;ack-300 hover:bg-gray-200 border-black" to="/blog">Blog</NavLink>
            <NavLink className="text-2xl m-2 p-2 rounded-xl shadow-sm shadow-b;ack-300 hover:bg-gray-200 border-black" to="/careers">Careers</NavLink>
        </div>
        <div className="display-flex justify-between gap-4">
            <span className=" display-flex text-2xl m-2 p-2 rounded-md border-black">Log in</span>
            <button className="bg-black text-white p-2 rounded-md">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar