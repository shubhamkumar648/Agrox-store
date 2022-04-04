// export const getPricedProducts = (products, price) => {
// 	return products.filter((item) => item.price <= price);
// };

// import React from 'react'

export const Pricefilter = (price,data) => {
     console.log(price,"priceee");
  return data.filter((item) => Number(item.discountPrice) <= Number(price))
}
