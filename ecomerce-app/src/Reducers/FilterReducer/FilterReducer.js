export const FilterReducer = (state, action) => {
    console.log(state,"staeconsole");

  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

  

    default:
      return state;
  }
};
