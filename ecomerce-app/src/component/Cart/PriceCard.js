import { useCart } from '../../Context/cart-context'
import { PriceItem, TotalItem } from '../../Utils'


export const PriceCard = () => {

const {cartState} = useCart()
const {cartItems} = cartState

const totalQuantity = TotalItem(cartItems)
const totalPrice = PriceItem(cartItems)

const discount = (totalPrice/10);
const totalAmount = (totalPrice + 100 - discount)


  return (
    
    <div className="cart_content_container  p-1 flex-col">
          <div className="cart_table_content">
            <table>
              <tr className="boder-btm">
                <th className="tableleftText">Price detail</th>
                <th className="tablerightText">Amount</th>
              </tr>
              <tr>
                <td className="tableleftText">Price({totalQuantity} item)</td>
                <td className="tablerightText">{totalPrice}</td>
              </tr>
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
            <button className="btn btn__primary  place_order_btn">
              Place Order
            </button>
          </div>
    </div>
  )
}
