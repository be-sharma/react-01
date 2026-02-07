import React from 'react'
import './nav.css'
const nav = () => {
  return (
    <nav  className="nav">
        <div className="logo">
            <img src="/logo.jpg" alt="" />
        </div>
        
        <div className="nav-items">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">FUTURE</a>
        </div>
        
        <div className="acc">
            <button>LOGIN\REG</button>
        </div>
    </nav>
  )
}

export default nav
