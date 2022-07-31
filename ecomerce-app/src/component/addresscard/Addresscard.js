import React from "react";
import { useAddress } from "../../Context/Address-context";

export const Addresscard = ({ address }) => {
  const { _id, name, city, addState, phoneNo, pincode, country, checked } =
    address;

  const { setAddress } = useAddress();

  const addressHandler = (e) => {
    setAddress((prevAddress) => {
      return prevAddress.map((address) =>
        address._id === _id
          ? { ...address, checked: e.target.checked }
          : { ...address, checked: false }
      );
    });
  };

  return (
    <div className="addressdetail flex ">
      <div className="radio-button-continer">
        <input
          type="radio"
          name="address"
          id="address"
          checked={checked}
          onChange={(e) => addressHandler(e)}
        />
      </div>

      <div>
        <h5> {name} </h5>
        <p>{`${city},${addState},${country},-${pincode}`}</p>

        <p>Mobile No:{phoneNo}</p>
      </div>
    </div>
  );
};
