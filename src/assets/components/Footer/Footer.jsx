import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full flex border-t-2 border-b-amber-50 flex-col p-4 sm:flex-row">
      <div className="w-1/3 m-2 p-2 rounded-md text-3xl flex items-center justify-center">
         <h1>YourLogo</h1>
      </div>
      <div className="w-1/3 m-2 p-2 rounded-md text-1xl">
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="m-2 hover:underline cursor-pointer"><Link to="/">Home</Link></li>
          <li className="m-2 hover:underline cursor-pointer"><Link to="/about">About</Link></li>
          <li className="m-2 hover:underline cursor-pointer"><Link to="/careers">Careers</Link></li>
          <li className="m-2 hover:underline cursor-pointer"><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
      <div className="w-1/3 m-2 p-2 rounded-md text-2xl">
          <h2>Brand Amethyst</h2>
          <p>Copyright 2025</p>
      </div>
    </div>
  )
}

export default Footer