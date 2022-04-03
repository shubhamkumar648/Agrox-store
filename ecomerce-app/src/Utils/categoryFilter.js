

   export const ProductcategoryFilter = (category, data) => {

            console.log(category ,"prod categor filter se ");
        const productList = [...data];
        if(category.length !== 0) {
          return productList.filter(({ categoryName }) =>
            category.includes(categoryName)
          );
        }
      
        return productList;
      };
    

  

