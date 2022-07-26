import React from "react";
import { createContext, useState, useContext } from "react";
import { v4 as uuid } from "uuid";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([
    {
      _id: uuid(),
      name: "shubham",
      city: "banglore",
      addState: "karnataka",
      phoneNo: "8888520007",
      pincode: "544441",
      country: "India",
      checked: true
    }
  ]);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
