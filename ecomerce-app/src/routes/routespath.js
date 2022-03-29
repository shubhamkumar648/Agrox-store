import React from 'react'
import { Route, Routes } from "react-router-dom";
import {Home,Cart,Wishlisht,Products, Login, Signup} from "../pages/index"

export const RoutPath = () => {
  return (
    <div>
      <Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/wishlisht" element ={<Wishlisht/>}/>
    <Route path ="/productlisting" element ={<Products/>}/>
    <Route path ="/cart" element ={<Cart/>}/>
    <Route path ="/login" element ={<Login/>}/>
    <Route path ="/signup" element ={<Signup/>}/>


  </Routes>
    
    </div>
  )
}




