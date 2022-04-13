import React from 'react'
import { Route, Routes } from "react-router-dom";
import {Home,Cart,Wishlisht, Login, Signup, Productslist} from "../pages/index"
import Mockman from "mockman-js"

export const RoutPath = () => {
  return (
    <div>
    <Routes>
    
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/wishlisht" element ={<Wishlisht/>}/>
    <Route path ="/productlisting" element ={<Productslist/>}/>
    <Route path ="/cart" element ={<Cart/>}/>
    <Route path ="/login" element ={<Login/>}/>
    <Route path ="/signup" element ={<Signup/>}/>
    <Route path ="/mockman" element ={<Mockman/>}/>

   </Routes>
    
    </div>
  )
}




