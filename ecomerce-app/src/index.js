import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, Productprovider } from "./Context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Productprovider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </Productprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
