import React from 'react'
import { Route, Routes } from "react-router-dom";
import {Home,Cart,Wishlist, Login, Signup, Productslist, CheckoutPage} from "../pages/index"
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
    
    <Route path = "/checkout"  element={<CheckoutPage/>}/>

    <Route path ="/mockman" element ={<Mockman/>}/>

   </Routes>
    
    </div>
  )
}




