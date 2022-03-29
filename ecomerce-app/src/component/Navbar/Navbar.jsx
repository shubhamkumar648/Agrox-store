import React from 'react'
import  "./Navbar.module.css"

export  function Navbar() {
  return (
    <div>
        <header class="ecom_header flex">
          <div class="brand_name">
            <a href="./index.html" class="link__nostyle fs-xl brand_color">
              Agrox Store
            </a>
          </div>
          <div class="input_Search_container">
            <input type="search" class="input_search" placeholder="Search" />
          </div>
          <div class="nav flex">
            <button class="btn btn__primary">
              <a href="./pages/login.html" class="link__nostyle">
                Login
              </a>
            </button>
            <button class="btn">
              <a href="./pages/wishlist.html" class="link__nostyle ">
                <i class="fa fa-solid fa-heart large_icon"></i>

                <span class="list_count">6</span>
              </a>
            </button>
            <button class="btn">
              <a href="./pages/cartmangment.html" class="link__nostyle ">
                <i
                  class="fa fa-shopping-cart large_icon"
                  aria-hidden="true"
                ></i>
                <span class="cart_count position">4</span>
              </a>
            </button>
          </div>
        </header>
    </div>
  )
}
