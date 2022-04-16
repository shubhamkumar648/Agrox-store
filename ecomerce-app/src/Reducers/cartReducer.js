export const cartReducerFun = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "Add_to_cart":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "Remove_from_cart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    case "Move_to_wishList":
      return { ...state, wishList: [...state.wishList, action.payload] };

    case "Delete_from_wishlist":
      return {
        ...state,
        wishList: state.wishList.filter((item) => item._id !== action.payload),
      };

    case "increase_quantity":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product._id === action.payload
            ? { ...product, qunatity: product.qunatity + 1 }
            : product
        ),
      };

    case "decrease_quantity":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product._id === action.payload
            ? { ...product, qunatity: product.qunatity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};
