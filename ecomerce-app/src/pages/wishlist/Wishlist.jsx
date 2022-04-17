import React from "react";
import { ProductCard } from "../../component/Productcard";
import { useCart } from "../../Context/cart-context";
import "./wishlist.css"
 
export  const Wishlist = () => {

 

  const { cartState } = useCart();
  const {wishList} = cartState

  return (
    <div>
      <h3 class="text_center  font-xxl pt-3 mb-2">
        <strong>MY WISHLIST</strong>
      </h3>

      <main class="wishlist_main_container">
        <hr />

        <div class="wishlist_card">
        
          {wishList.length > 0 ? (<>{ wishList.map(item => (
         <ProductCard key={item._id} prodDetail={item} />
       )) }</>) : (<div className='f-l font-l mt-xl'>
         Your wishlist is  empty!! 😔
       </div>

       )}
        </div>
      </main>
    </div>
  );
};
