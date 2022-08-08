import React from "react";

import { useFilter } from "../../Context/FilterContext/Filter-context";
import { CategoriesFilter } from "./CategoriesFilter";
import { PriceFilter } from "./PriceFilter";
import { RatingFilterr } from "./RatingFilterr";

export const ProductFilter = () => {
  
  const { filterstate, filterdispatch } = useFilter();

  return (
    <div>
      <aside class="productlist_filter_sidebar ">
        {/* <!-- header sidebar section--> */}
        <div class="sidebar_header flex wrap pt-1">
          <h4 class="font-l mb-1"> Filters</h4>
            <span
              class="clearall "
              onClick={() => filterdispatch({ type: "CLEAR" })}
            >
              Clear all
            </span>
          
        </div>
        <hr />

        <div class="aside_filterlist flex flex-col wrap mr-2 pl-2">
          <PriceFilter />

          <div class="sortby filter_li">
            <h4 class="font-l mt-1"> Sort by</h4>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    value="low_to_High"
                    checked={filterstate.sortBy === "low_to_High"}
                    onChange={(e) =>
                      filterdispatch({
                        type: "SORT_BY",
                        payload: e.target.value,
                      })
                    }
                  />
                   Low to High
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    value="high_to_Low"
                    checked={filterstate.sortBy === "high_to_Low"}
                    onChange={(e) =>
                      filterdispatch({
                        type: "SORT_BY",
                        payload: e.target.value,
                      })
                    }
                  />
                   High to Low
                </label>
              </li>
            </ul>
          </div>

          <hr />

          <CategoriesFilter />

          {/* <!-- rating filter  section --> */}

          <hr />
          <RatingFilterr />
        </div>
      </aside>
    </div>
  );
};
