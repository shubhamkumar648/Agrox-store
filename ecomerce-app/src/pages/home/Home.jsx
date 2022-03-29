import React from "react";
import "./Home.css";


import { Banner, Categories, Footer, Navbar } from "../../component/index";

export const Home = () => {
  return (
    <div>
      <>
        

         <Navbar/>
        <main class="main__container">
             <Banner />
           <Categories />
        </main>
         <Footer/>
      
      </>
    </div>
  );
};
