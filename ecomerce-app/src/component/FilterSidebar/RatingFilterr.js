import React from "react";
import { useFilter } from "../../Context/FilterContext/Filter-context";

export const RatingFilterr = () => {
  const { filterstate, filterdispatch } = useFilter();
  const { rating } = filterstate;

  return (
    <div>
      <div className="Rating filter_li">
        <h4 className="font-l mt-1"> Rating</h4>
        <ul>
          <li>
            <input
              type="radio"
              name="radio-button"
              value="4"
              checkced={rating === 4}
              onChange={() =>
                filterdispatch({ type: "FILTER_BY_RATING", payload: 4 })
              }
            />
            <label for="ferilizer"> 4 star & Above</label>
          </li>
          <li>
            <input
              type="radio"
              name="radio-button"
              checkced={rating === 3}
              onChange={() =>
                filterdispatch({ type: "FILTER_BY_RATING", payload: 3 })
              }
            />
            <label for="Pesticide"> 3 star & Above </label>
          </li>
          <li>
            <input
              type="radio"
              name="radio-button"
              value="2"
              checked={rating === 2}
              onChange={() =>
                filterdispatch({ type: "FILTER_BY_RATING", payload: 2 })
              }
            />
            <label for="seeds"> 2 star & Above</label>
          </li>
          <li>
            <input
              type="radio"
              name="radio-button"
              value="1"
              checked={rating === 1}
              onChange={() =>
                filterdispatch({ type: "FILTER_BY_RATING", payload: 1 })
              }
            />
            <label for="Tools"> 1 star & Above</label>
          </li>
        </ul>
      </div>
    </div>
  );
};
