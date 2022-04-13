import { createContext, useReducer, useContext } from "react";
import { cartReducerFun } from ".././Reducers/cartReducer"

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const initialState = {
        cartItems:[0]
    }

  const [cartState, cartDispatch] = useReducer(cartReducerFun, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext)

export { useCart, CartProvider };
