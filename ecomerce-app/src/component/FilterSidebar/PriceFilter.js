import React from "react";
import { useFilter } from "../../Context/FilterContext/Filter-context";

export const PriceFilter = () => {
  const { filterstate, filterdispatch } = useFilter();

  return (
    <div>
      <h4 class=" font-l mt-1">Price</h4>
      <label>
        <p>
          <span className="fnt-w-600"> 0 </span>
          to <span className="fnt-w-600">{filterstate.price}</span>
        </p>
        <input
          type="range"
          min="3500"
          max="6000"
          step="100"
          value={filterstate.price}
          onChange={(e) => {
            filterdispatch({
              type: "FILTER_BY_PRICE",
              payload: e.target.value,
            });
          }}
          list="tickmarks"
          class="slider"
        />
      </label>
    </div>
  );
};
