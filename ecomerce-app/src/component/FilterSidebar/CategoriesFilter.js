import React from 'react'
import { useFilter } from '../../Context/FilterContext/Filter-context'

export const CategoriesFilter = () => {

    const {filterstate,filterdispatch} = useFilter()
    const {category} = filterstate

  return (
    <div>

<div class="price filter_li">

          <h4 class="font-l mt-1">Category</h4>

            <ul>
              <li>
                <input 
                type="checkbox" 
                id="fertilizer" 
                value="Fertilizer"
                checked ={category.includes("Fertilizer")} 

                onChange={(e) => filterdispatch({type:"FILTER_BY_CATEGORY",payload: e.target.value})}

                />
                <label for="fertilizer">Ferilizer</label>
                <br />
              </li>
              <li>
                <input type="checkbox" 
                id="Pesticide"
                checked = {category.includes("Pesticide")} 
                value="Pesticide"
                onChange={(e) => filterdispatch({type:"FILTER_BY_CATEGORY",payload: e.target.value})}

                />
                <label for="Pesticide"> Pesticide</label>
                <br />
              </li>
              <li>
                <input type="checkbox" 
                id="seed" 
                value="Seed"
                checked = {category.includes("Seed")} 

                onChange={(e) =>filterdispatch({type:"FILTER_BY_CATEGORY",payload: e.target.value})}

                />
                <label for="Seed">Seed</label>
                <br />
              </li>
              <li>
                <input type="checkbox" 
                id="tools"
                value="Tools"
                checked = {category.includes("Tools")} 
                onChange={(e) => filterdispatch({type:"FILTER_BY_CATEGORY",payload: e.target.value})}

                 />
                <label for="toolse1">Tools</label>
                <br />
              </li>
            </ul>
          </div>
          <hr />

    </div>
  )
}
