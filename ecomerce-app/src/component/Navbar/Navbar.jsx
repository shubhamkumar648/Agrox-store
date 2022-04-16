import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart,FaShoppingCart } from "react-icons/fa";

import  "./Navbar.module.css"
import { useCart } from '../../Context/cart-context';

export   const Navbar = ()  =>{

  const {cartState} = useCart()
  const {cartItems,wishList} = cartState

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
              <Link  className='link__nostyle' to="/wishList"> 
                  <FaHeart className='large_icon' />
                <span className="list_count">{wishList.length}</span>
              </Link>
            </button>
            <button className="btn">
              <a href="./pages/cartmangment.html" className="link__nostyle ">
              <Link className='link__nostyle' to = "/cart">
                 <FaShoppingCart className='large_icon'/>
              </Link>
             <span className="cart_count position">{cartItems.length}</span>
              </a>
            </button>
          </div>
        </header>
    </div>
  )
}
