import React from 'react'
import { Link } from 'react-router-dom'
import  "./Navbar.module.css"

export  function Navbar() {
  return (
    <div>
        <header className="ecom_header flex">
          <div className="brand_name">
          
            <Link className="link__nostyle fs-xl brand_color" to = "/" >Agrox Store</Link>

          </div>
          <div className="input_Search_container">
            <input type="search" className="input_search" placeholder="Search" />
          </div>
          <div className="nav flex">
            <button className="btn btn__primary">
            
              <Link className="link__nostyle" to= "/login"> Login</Link>
              </button>
              
            <button className="btn">
              <a href="./pages/wishlist.html" className="link__nostyle ">
                <i className="fa fa-solid fa-heart large_icon"></i>

                <span className="list_count">6</span>
              </a>
            </button>
            <button className="btn">
              <a href="./pages/cartmangment.html" className="link__nostyle ">
                <i
                  className="fa fa-shopping-cart large_icon"
                  aria-hidden="true"
                ></i>
                <span className="cart_count position">4</span>
              </a>
            </button>
          </div>
        </header>
    </div>
  )
}
