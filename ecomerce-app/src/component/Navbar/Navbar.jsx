import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart,FaShoppingCart,FaSignOutAlt } from "react-icons/fa";
import  "./Navbar.module.css"
import { useCart } from '../../Context/cart-context';
import { useAuth } from '../../Context/Auth-context';

export   const Navbar = ()  =>{

  const {cartState} = useCart()
  const {cartItems,wishList} = cartState

  const {user,setUser} = useAuth()


  const logoutHandler = () => {

    localStorage.removeItem('token');
    setUser(null)

  }
  return (
    <div>
        <header className="ecom_header flex">
          <div className="brand_name">
          
            <Link className="link__nostyle fs-xl brand_color" to = "/" >Agrox Store</Link>

          </div>
          
          <div className="nav flex">
          {user ? (
        <button className="btn logout-btn font-xl fs-l" onClick={logoutHandler} ><FaSignOutAlt className="large_icon" />
 </button>
      ): (

        <Link className="link__nostyle Login-text btn" to="/login">
          Login
        </Link>
      )}

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
