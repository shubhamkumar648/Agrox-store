import React from "react";
import { useState } from "react";
import { Addresscard } from "../addresscard/Addresscard";
import { Addressform } from "../addressform/Addressform";
import { v4 as uuid } from "uuid";
import { useAddress } from "../../Context/Address-context";
import { useCart } from "../../Context/cart-context";
import { PriceItem } from "../../Utils";

export const Checkout = () => {
  const { address } = useAddress();
  const [isAddress, setIsaddress] = useState(false);
  
  const {cartState,cartDispatch} =  useCart()
    const {cartItems} = cartState
    const totalPrice = PriceItem(cartItems)
    const discount = (totalPrice/10);
    const totalAmount = (totalPrice + 100 - discount)

  

  return (
    <div className="chekout-maincontainer">
      <div className="address-form">
        <div className="chekout flex p-1 mt-3">
          <div className="adressMangement flex">
            {address?.map((address) => (
              <Addresscard key={address._id} address={address} />
            ))}

            <button
              className="btn btn__primary mt-2 mr-2"
              onClick={() => setIsaddress((prev) => !prev)}
            >
              Add Address
            </button>
          </div>

          <div className="orderdetail flex flex-col">
            <h5> Order Detail</h5>
            <hr />
            {cartItems.map(({_id,qunatity,discountPrice,categoryName}) => (

            <table key={_id}>
              <tr className="boder-btm">
                <th className="tableleftText">Item detail</th>
                <th className="tablerightText">Amount</th>
              </tr>
              <tr>
                <td className="tableleftText"> {categoryName} -item({qunatity})</td>
                <td className="tablerightText">{discountPrice}</td>
              </tr>
            </table>
            ))}
            <hr />
            <h5>Billing</h5>
            <hr />
            <table>
              <tr>
                <td className="tableleftText">
                  Discount <small className="discount-color">(10%)</small>
                </td>
                <td className="tablerightText">{discount}</td>
              </tr>
              <tr className="boder-btm">
                <td className="tableleftText">Delivery charge</td>
                <td className="tablerightText">Rs.100</td>
              </tr>
              <tr>
                <td className="tableleftText fs-l font-xl">Total:</td>
                <td className="tablerightText fs-l font-xl">{totalAmount}</td>
              </tr>
            </table>

            <div className="delvierto-container flex flex-col font-l p-1">
              <hr />

              <div>

                {address?.map(
                  ({
                    _id,
                    name,
                    city,
                    addState,
                    phoneNo,
                    pincode,
                    country,
                    checked
                  }) =>
                    checked && (
                      <div key={_id}>
                        <h5 className="mt-1">DEILVERING TO</h5>
                        <hr />
                        <h5 className="text-align pt-1"> {name} </h5>
                        <p className="text-align">{`${city},${addState},${country},-${pincode}`}</p>
                        <p className="text-align">Mobile No: {phoneNo}</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>

        {isAddress && <Addressform setIsaddress={setIsaddress} />}
      </div>
    </div>
  );
};
