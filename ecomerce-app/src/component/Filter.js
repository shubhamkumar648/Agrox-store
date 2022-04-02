import React from 'react'

export const ProductFilter = () => {
    
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
          <div class="sortby filter_li">
            <h4 class="font-l mt-1">Sort by</h4>
            <ul>
              <li>
                <input
                  type="radio"
                  id="ferilizer"
                  name="fav_lib"
                  value="fertilizer"
                />
                <label for="ferilizer">High to Low</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="Pesticide"
                  name="fav_lib"
                  value="Pesticided"
                />
                <label for="Pesticide">Low to High</label>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}
