import React from "react";
import { Link } from "react-router-dom";
import "./Productslist.css";
import { ProductCard } from "../../component/Productcard";
import { useProduct } from "../../Context/ProductContext/Prodctcard-context";
import { ProductFilter } from "../../component/Filter";
import { useFilter } from "../../Context/FilterContext/Filter-context";

export const Productslist = () => {
  const { product } = useProduct();
  const { filterstate, filterdispatch } = useFilter();

  const SortProduct = (sort, data) => {

      const list = [...data];
    if (sort === "low_to_High") {
      
      return list.sort(
        (item1, item2) => (item1.discountPrice) - (item2.discountPrice)

      );
    } else if (sort === "high_to_Low") {
      return list.sort(
        (item1, item2) => (item2.discountPrice) - (item1.discountPrice)

      );
    }

    return list;
  };

  const SortedProduct = SortProduct(filterstate.sortBy, product);

  return (
    <main class="productlist_layout">
      <ProductFilter />

      <article class="prodctlist_card_section">
        <>
          {SortedProduct.map((item) => {

            return <ProductCard prodDetail={item} key={item.id} />;
          })}
        </>
      </article>
    </main>
  );
};
