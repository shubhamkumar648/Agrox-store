import React from 'react'

import { useFilter } from '../Context/FilterContext/Filter-context'


export const ProductFilter = () => {
  const {filterstate,filterdispatch} = useFilter()
  
  return (
    <div>
        <aside class="productlist_filter_sidebar">
        {/* <!-- header sidebar section--> */}
        <div class="sidebar_header flex wrap pt-1">
          <h4 class="font-l mb-1"> Filters</h4>
          <a href="#" class="link__nostyle">
            <span class="clearall text_center">Clear all</span>
          </a>
        </div>
        <hr />

        <div class="aside_filterlist flex flex-col wrap">
          <h4 class=" font-l mt-1">Price</h4>
          <input
            type="range"
            min="0"
            max="100"
            step="40"
            list="tickmarks"
            class="slider"
          />

     
           <div class="sortby filter_li">
            <h4 class="font-l mt-1">Sort by</h4>
            <ul>
              <li>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value = "low_to_High"
                  checked={filterstate.sortBy ==="low_to_High"}
                  onChange={(e) => filterdispatch({ type: "SORT_BY",payload: e.target.value})}

                />
                Low to High</label>
              </li>
              <li>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value ="high_to_Low"

                  checked={filterstate.sortBy ==="high_to_Low"}
                  onChange={(e) => filterdispatch({type: "SORT_BY", payload: e.target.value})}

                />
                High to Low</label>
              </li>
            </ul>
          </div>

               <hr />
          {/* <!-- price filter section  --> */}
          <div class="price filter_li">
            <ul>
              <li>
                <input type="checkbox" id="fertilizer" />
                <label for="fertilizer">Ferilizer</label>
                <br />
              </li>
              <li>
                <input type="checkbox" id="Pesticide" />
                <label for="Pesticide"> Pesticide</label>
                <br />
              </li>
              <li>
                <input type="checkbox" id="Seed" />
                <label for="Seed">Seed</label>
                <br />
              </li>
              <li>
                <input type="checkbox" id="tools" />
                <label for="toolse1">To/ols</label>
                <br />
              </li>
            </ul>
          </div>
          <hr />

          {/* <!-- rating filter  section --> */}
          <div class="Rating filter_li">
            <h4 class="font-l mt-1">Rating</h4>
            <ul>
              <li>
                <input
                  type="radio"
                  id="ferilizer"
                  name="fav_lib"
                  value="fertilizer"
                />
                <label for="ferilizer">Fertilizer</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="Pesticide"
                  name="fav_lib"
                  value="Pesticided"
                />
                <label for="Pesticide">Pesticide</label>
              </li>
              <li>
                <input type="radio" id="seeds" name="fav_lib" value="Seeds" />
                <label for="seeds">Seeds</label>
              </li>
              <li>
                <input type="radio" id="Tools" name="fav_lib" value="Tools" />
                <label for="Tools">Tools</label>
              </li>
            </ul>
          </div>

          <hr />
          {/* <div class="sortby filter_li">
            <h4 class="font-l mt-1">Sort by</h4>
            <ul>
              <li>
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "low_to_High"}
                  onChange={() => dispatch({type: "low_to_High"})}

                />
                High to Low</label>
              </li>
              <li>
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "high_to_Low"}
                  onChange={() => dispatch({type: "high_to_Low"})}

                />
                Low to High</label>
              </li>
            </ul>
          </div> */}
        </div>
      </aside>
    </div>
  )
}
