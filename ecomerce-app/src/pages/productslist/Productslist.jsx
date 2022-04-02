import React from 'react'
import { Link } from 'react-router-dom'
import "./Productslist.css";
import { ProductCard } from '../../component/Productcard';
import { useProduct } from '../../context/Prodctcard-context';
          

export const Productslist = () => {

  const{ product } = useProduct()

  return(
        
    <main class="productlist_layout">

<aside class="productlist_filter_sidebar">


  {/* <!-- header sidebar section--> */}
  <div class="sidebar_header flex wrap pt-1">
    <h4 class="font-l mb-1"> Filters</h4>
    <a href="#" class="link__nostyle"><span class="clearall text_center">Clear all</span></a>
  </div>
  <hr />

  <div class="aside_filterlist flex flex-col wrap">

    <h4 class=" font-l mt-1">Price</h4>
    <input type="range" min="0" max="100" step="40" list="tickmarks" class="slider"/>

    {/* <!-- price filter section  --> */}
    <div class="price filter_li">
      <ul>
        <li>
          <input type="checkbox" id="fertilizer"/>
          <label for="fertilizer">Ferilizer</label><br/>
        </li>
        <li>
          <input type="checkbox" id="Pesticide"/>
          <label for="Pesticide"> Pesticide</label><br/>
        </li>
        <li>
          <input type="checkbox" id="Seed"/>
          <label for="Seed">Seed</label><br/>
        </li>
        <li>
          <input type="checkbox" id="tools"/>
          <label for="toolse1">To/ols</label><br/>
        </li>
      </ul>
    </div>
    <hr />
    {/* <!-- rating filter  section --> */}
    <div class="Rating filter_li">
      <h4 class="font-l mt-1">Rating</h4>
      <ul>
        <li>
          <input type="radio" id="ferilizer" name="fav_lib" value="fertilizer"/>
          <label for="ferilizer">Fertilizer</label>

        </li>
        <li>
          <input type="radio" id="Pesticide" name="fav_lib" value="Pesticided"/>
          <label for="Pesticide">Pesticide</label>
        </li>
        <li>
          <input type="radio" id="seeds" name="fav_lib" value="Seeds"/>
         <label for="seeds">Seeds</label>

        </li>
        <li>
          <input type="radio" id="Tools" name="fav_lib" value="Tools"/>
         <label for="Tools">Tools</label>
        </li>
      </ul>
    </div>

    <hr/>
    <div class="sortby filter_li">
      <h4 class="font-l mt-1">Sort by</h4>
      <ul>
        <li>
          <input type="radio" id="ferilizer" name="fav_lib" value="fertilizer"/>
          <label for="ferilizer">High to Low</label>

        </li>
        <li>
          <input type="radio" id="Pesticide" name="fav_lib" value="Pesticided"/>
          <label for="Pesticide">Low to High</label>
        </li>
        </ul>
    </div>

  </div>

</aside>

<article class="prodctlist_card_section">

              {product.map((item) => {
                                  console.log(product)

                return (
                  <ProductCard prodDetail={item}/>
                )
              })

              }

  {/* <div class="product_cardMainBody">
    <div class="product_card">
      <img src={img} alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">{title}</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">{categoryName}</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>{discountPrice}</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">{mrpPrice}</h6>
        <h6 class="discount-color fs-md">{discount}</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div> */}

{/* 
  <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/seedcard.jpeg" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Seed</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Carrot</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div> */}

  {/* <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/pesticidecard.jpg" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Pesticide</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Narture plant</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div>


  <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/ferilizercard.jpeg" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Fertilizer</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Bio Fertilizer</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div>


  <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/asspee.png" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Tools</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Spray Machine</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div>


  <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/seedcard.jpeg" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Seed</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Carrot</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div>


  <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/pesticidecard.jpg" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Pesticided</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Narture Plant</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div>


  <div class="product_cardMainBody">
    <div class="product_card">
      <img src="../assets/ferilizercard.jpeg" alt="img" class="img-responsive"/>
      <div class="card_content flex mt-1 p-1">
        <h6><a href="#" class="link__nostyle">Fertilizer</a></h6>
        <span class="herticon"><i class="fa fa-solid fa-heart large_icon"></i></span>
      </div>
      <small class="light ml-1">Bio Fertilizer</small>
      <div class="price flex mt-1 ml-1">
        <h6 class="pr-1 font-xl">
          <strong>Rs.900</strong>
        </h6>
        <h6 class="actual_price light fs-md linthrough">Rs.1000</h6>
        <h6 class="discount-color fs-md">(10% OFF)</h6>
      </div>
      <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
        <span class="ml-3">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Add to cart
      </button>
    </div>
  </div> */}

</article>

</main>

    

  )
}
