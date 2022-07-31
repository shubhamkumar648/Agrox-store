import React from "react";
import { Link } from "react-router-dom";

import { useAxios } from "../../Utils";
import { Categoriesitem } from "./Categoriesitem";

export const Categories = () => {
  const { apiData, loading } = useAxios("/api/categories");
  const { categories } = apiData;
  console.log(categories);
  return (
    <div>
      <h3 className="text_center headtext_color2 mt-2">VIEW ALL PRODUCTS</h3>
      <div className="category_container">
        {loading ? (
          <h3>loading....</h3>
        ) : (
          categories.map((itemAgri) => {
            return (
              <Link to="/productlisting">
                <Categoriesitem itemDetail={itemAgri} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
