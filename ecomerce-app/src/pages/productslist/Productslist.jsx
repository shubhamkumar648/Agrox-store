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
import { Pricefilter } from "../../Utils/pricefilter";

export const Productslist = () => {
  const { product } = useProduct();
  const { filterstate } = useFilter();

    
const {sortBy,category,rating,price} = filterstate

const SortedProduct = SortProduct(sortBy, product);
const CategoriesFilter = ProductcategoryFilter(category,SortedProduct)
const ProductRatingFilter = RatingFilter(rating,CategoriesFilter)
const ProductPriceFilter = Pricefilter(price,ProductRatingFilter) 
  
      console.log(ProductPriceFilter,"filter dattaaaa");

  return (
    <main class="productlist_layout">
      <ProductFilter />

      <article class="prodctlist_card_section">
        <>
          
           {ProductPriceFilter.map((item) => {
                   {console.log("sidhe categore filter se ....")}
            return <ProductCard prodDetail={item} key={item.id} />;
          })} 
        </>
      </article>
    </main>
  );
};
