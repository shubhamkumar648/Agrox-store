import React from "react";
import { Cartcard } from "../../component/Cart/CartCard";
import { PriceCard } from "../../component/Cart/PriceCard";
import { useCart } from "../../Context/cart-context";
import { Link } from "react-router-dom";
import "./Cart.css";


export const Cart = () => {
  
  const {cartState} = useCart()
  const {cartItems} = cartState
  console.log(cartItems)

  return (
    <div>

      <h3 className="text_center  font-xxl pt-3">
        <strong>MY CART</strong>
      </h3>

         {cartItems.length > 0 ? (

          <main className="productcard_cart flex wrap flex_center">

          {cartItems.map ((item) => (<Cartcard key = {item._id} product = {item}/> ))}

            

        {/* <!-- card total price section --> */}
                
        
             <PriceCard />
       
      </main>
      ): (
        <div>
          your cart is empty go back to shoping <Link to = "/productlisting">Product</Link>

           
        </div>
      )
      
      } 
           
    </div>
  );
};
