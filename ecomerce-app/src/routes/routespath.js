import React from 'react'
import { Route, Routes } from "react-router-dom";
import {Home,Cart,Wishlist, Login, Signup, Productslist, CheckoutPage, Order} from "../pages/index"
import RequireAuth from '../Utils/requireAuth';
import Mockman from "mockman-js";

export const RoutPath = () => {
  return (
    <div>
    <Routes>
    
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/wishList"   element ={<RequireAuth><Wishlist/> </RequireAuth>}/>
    <Route path ="/productlisting" element ={<Productslist/>}/>
    <Route path ="/cart" element ={ <RequireAuth> <Cart/> </RequireAuth>}/>
    <Route path ="/login" element ={<Login/>}/>
    <Route path ="/signup" element ={<Signup/>}/>
    <Route path ="/order" element ={<RequireAuth><Order/></RequireAuth>}/>

    <Route path = "/checkout"  element={<RequireAuth> <CheckoutPage/></RequireAuth>}/>
    <Route path ="/mockman" element ={<Mockman/>}/>
  
   </Routes>
    
    </div>
  )
}




