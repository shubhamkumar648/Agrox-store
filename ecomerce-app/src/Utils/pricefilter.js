
export const Pricefilter = (price, data) => {
  console.log(price, "priceee");
  return data.filter((item) => Number(item.discountPrice) <= Number(price));
};
