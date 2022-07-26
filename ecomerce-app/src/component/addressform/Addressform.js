import React from "react";
import { useReducer } from "react";
import { useAddress } from "../../Context/Address-context";
import { AddressReducer } from "../../Reducers/AddressReducer";
import { v4 as uuid } from "uuid";

export const Addressform = ({setIsaddress}) => {
  const [state, dispatch] = useReducer(AddressReducer, {
    name: "",
    city: "",
    addState: "",
    phoneNo: "",
    pincode: "",
    country: ""
  });

  const { name, city, addState, phoneNo, pincode, country } = state;

   const {setAddress} =  useAddress()

  const addressHandler = (e) => {

    e.preventDefault()
    const newAddress = {
         ...state,
         _id: uuid(),
         checked:false
    }

    setAddress((prevAddress) => [...prevAddress,newAddress])
    setIsaddress(false)
  }

  return (

    <div className="address-mainContainer" onClick={() => setIsaddress(false)}> 
    <div className="addressform-container" onClick={(e) => e.stopPropagation()}>

    <div className="addressform flex flex-col">
      <form onSubmit={addressHandler}>
        <label>Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          required
        />

        <label>City:</label>

        <input
          type="text"
          value={city}
          onChange={(e) =>
            dispatch({ type: "SET_CITY", payload: e.target.value })
          }
          required
        />

        <label>Pincode:</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) =>
            dispatch({ type: "SET_PINCODE", payload: e.target.value })
          }
          required
        />

        <label>State:</label>
        <input
          type="text"
          value={addState}
          onChange={(e) =>
            dispatch({ type: "SET_ADDSTATE", payload: e.target.value })
          }
          required
        />

        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) =>
            dispatch({ type: "SET_COUNTRY", payload: e.target.value })
          }
          required
        />

        <label>Phone</label>
        <input
          type="text"
          value={phoneNo}
          onChange={(e) =>
            dispatch({ type: "SET_PHONE", payload: e.target.value })
          }
          required
        />

        <button type="submit">Add to new Address</button>

        <button
          type="submit"
          onClick={(e) =>
            dispatch({ type: "SET_DUMMYADDRESS", payload: e.target.value })
          }
        >
          {" "}
          Add dummy address{" "}
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};
