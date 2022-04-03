export const FilterReducer = (state, action) => {
  console.log(state, "staeconsole");

  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "FILTER_BY_CATEGORY":
      return state.category.includes(action.payload)

        ? {
            ...state,
            category: state.category.filter((item) => item !== action.payload),
          }
        : {
            ...state,
            category: [...state.category, action.payload],
          };

    default:
      return state;
  }
};
