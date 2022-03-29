import React from "react";
import "./Home.css";

import pesticides from "../../assest/pesticide.jpg";
import fertilizer from "../../assest/fertilizer.jpg";
import seed from "../../assest/seed.jpg";
import tool from "../../assest/tools.jpg";

export const Home = () => {
  return (
    <div>
      <>
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
        {/* <!-- main container --> */}

        <main class="main__container">
          <div class="image_container img_responsive">
            <h3 class="text_center headtext_color lh-l pt-3 font-xxl">
              Welcom to Agrox Store
            </h3>
            <h5 class="text_center headtext_color lh-l font-xxl">
              We provide Quality Agriculture Products at a reliable price
            </h5>

            <div class="shopNow">
              <button class="btn btn__primary m-auto " styles="m-auto">
                <a href="./pages/productlist.html" class="link__nostyle">
                  Shop Now
                </a>
              </button>
            </div>
          </div>

          <h3 class="text_center headtext_color2 mt-2">VIEW ALL PRODUCTS</h3>
          <div class="category_container">
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Fertilizer</span>
                <img
                  src={fertilizer}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>

            {/* <!-- / product category section --> */}
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Pesticide</span>
                <img
                  src={pesticides}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Seed</span>
                <img
                  src={seed}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Tools</span>
                <img
                  src={tool}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>
          </div>
        </main>

        <footer class="fotter__container">
          <div class="footer_header">
            <span class="font-l fs-l">
              Mady by<i class="fas fa-code code_color"></i>Shubham Kumar
            </span>
          </div>

          <div class="footer_social-icon">
            <ul>
              <li>
                <a href="https://github.com/shubhamkumar648" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shubham8124" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shubham-kumar8124"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    </div>
  );
};
