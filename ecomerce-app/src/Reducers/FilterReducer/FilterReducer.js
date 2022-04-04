export const FilterReducer = (state, action) => {

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


          case  "FILTER_BY_RATING":
           return {...state, rating: action.payload}


           case "FILTER_BY_PRICE":
             return {...state, price:action.payload}

             case "CLEAR":
               console.log(action.type,"action clear");
             return {...state, 
             sortBy: "",
             category: [],
             rating: "",
             price:0,}

    default:
      return state;
  }
};
