import React from "react";
import "./Home.css";


import { Banner, Categories, Footer } from "../../component";

export const Home = () => {
  return (
    <div>
      <>
        

        <main className="main__container">
             <Banner />
           <Categories />
        </main>
         <Footer/>
      
      </>
    </div>
  );
};
