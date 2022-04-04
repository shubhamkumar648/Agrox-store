export const ProductcategoryFilter = (category, data) => {
  const productList = [...data];
  if (category.length !== 0) {
    return productList.filter(({ categoryName }) =>
      category.includes(categoryName)
    );
  }

  return productList;
};
