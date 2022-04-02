import React from "react";
import { Link } from "react-router-dom";
import "./Productslist.css";
import { ProductCard } from "../../component/Productcard";
import {useProduct}  from "../../Context/ProductContext/Prodctcard-context"
import { ProductFilter } from "../../component/Filter";

export const Productslist = () => {
  const { product } = useProduct()

  return (
    <main class="productlist_layout">
    
      <ProductFilter/>

      <article class="prodctlist_card_section">

        {product.map((item) => {
          console.log(product);

          return <ProductCard prodDetail={item} />;
        })}

      
      </article>
    </main>
  );
};
