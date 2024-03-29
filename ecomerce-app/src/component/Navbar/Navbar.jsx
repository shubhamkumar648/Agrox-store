import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart,FaShoppingCart,FaSignOutAlt } from "react-icons/fa";
import  "./Navbar.module.css"
import { useCart } from '../../Context/cart-context';
import { useAuth } from '../../Context/Auth-context';
import { useToast } from '../../Utils/useToast';

export   const Navbar = ()  =>{

  const {cartState} = useCart()
  const {cartItems,wishList} = cartState

  const {user,setUser} = useAuth()
const {showToast}  =  useToast()

  const logoutHandler = () => {

    localStorage.removeItem('token');
    setUser(null)
    showToast("success", "Logged out!");


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
              {wishList.length > 0 &&  <span className="list_count">{wishList.length}</span> }
              </Link>
            </button>
            <button className="btn">
              <Link className='link__nostyle' to = "/cart">
                 <FaShoppingCart className='large_icon'/>
              </Link>
           {cartItems.length > 0 &&  <span className="cart_count position">{cartItems.length}</span>}
              
            </button>
          </div>
        </header>
    </div>
  )
}
