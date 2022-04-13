import React from 'react'

export const PriceCard = () => {
  return (
    

<div className="cart_content_container  p-1 flex-col">
          <div className="cart_table_content">
            <table>
              <tr className="boder-btm">
                <th className="tableleftText">Price detail</th>
                <th className="tablerightText">Amount</th>
              </tr>
              <tr>
                <td className="tableleftText">Price(2 items)</td>
                <td className="tablerightText">Rs.2000</td>
              </tr>
              <tr>
                <td className="tableleftText">
                  Discount <small className="discount-color">(10%)</small>
                </td>
                <td className="tablerightText">Rs.200</td>
              </tr>
              <tr className="boder-btm">
                <td className="tableleftText">Delivery charge</td>
                <td className="tablerightText">Rs.100</td>
              </tr>
              <tr>
                <td className="tableleftText fs-l font-xl">Total:</td>
                <td className="tablerightText fs-l font-xl">Rs.1900</td>
              </tr>
            </table>
            <button className="btn btn__primary  place_order_btn">
              Place Order
            </button>
          </div>
    </div>
  )
}
