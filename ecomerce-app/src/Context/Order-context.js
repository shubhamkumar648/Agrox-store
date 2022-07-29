import React from "react";
import { createContext,useContext,useReducer } from "react";
import { orderReducer } from "../Reducers/orderReducer";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialState = {

    order: {}
  };
  const [orderState, orderDispatch] = useReducer(orderReducer, initialState);


  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext)

