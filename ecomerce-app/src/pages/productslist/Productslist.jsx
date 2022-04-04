import React from "react";
import { Link } from "react-router-dom";
import "./Productslist.css";
import { ProductCard } from "../../component/Productcard";
import { useProduct } from "../../Context/ProductContext/Prodctcard-context";
import { ProductFilter } from "../../component/FilterSidebar/Filter";
import { useFilter } from "../../Context/FilterContext/Filter-context";

import { SortProduct } from "../../Utils/sortProduct";
import { ProductcategoryFilter } from "../../Utils/categoryFilter";
import { RatingFilter } from "../../Utils/ratingFilter";

export const Productslist = () => {
  const { product } = useProduct();
  const { filterstate } = useFilter();

    
  const {sortBy,category,rating} = filterstate
const SortedProduct = SortProduct(sortBy, product);
const CategoriesFilter = ProductcategoryFilter(category,SortedProduct)
const ProductRatingFiter = RatingFilter(rating,CategoriesFilter)

  return (
    <main class="productlist_layout">
      <ProductFilter />

      <article class="prodctlist_card_section">
        <>
          
           {ProductRatingFiter.map((item) => {
                   {console.log("sidhe categore filter se ....")}
            return <ProductCard prodDetail={item} key={item.id} />;
          })} 
        </>
      </article>
    </main>
  );
};
