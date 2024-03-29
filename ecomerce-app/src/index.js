import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AddressProvider,
  CartProvider,
  FilterProvider,
  ProductProvider
} from "./Context";
import { AuthProvider } from "./Context/Auth-context";
import { OrderProvider } from "./Context/Order-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <AddressProvider>
              <OrderProvider>
              <App />
             </OrderProvider>
              </AddressProvider>
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
