export const SortProduct = (sort, data) => {
  const list = [...data];
  if (sort === "low_to_High") {
    return list.sort(
      (item1, item2) => item1.discountPrice - item2.discountPrice
    );
  } else if (sort === "high_to_Low") {
    return list.sort(
      (item1, item2) => item2.discountPrice - item1.discountPrice
    );
  }

  return list;
};
