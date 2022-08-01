import { useCart } from "../../Context/cart-context";
import axios from "axios";
import { ItemWishlist } from "../../Utils";
import { useToast } from "../../Utils/useToast";

const Cartcard = ({ product }) => {
  const {
    img,
    categoryName,
    discountPrice,
    mrpPrice,
    discount,
    _id,
    qunatity,
  } = product;

  const { cartState, cartDispatch } = useCart();

  const IteminwishList = ItemWishlist(_id, cartState.wishList);

  const {showToast} = useToast()

  const removeFromCartHandler = async (_id) => {
    {
      try {
        const cartResponse = await axios.delete(`api/user/wishlist/${_id}`, {
          headers: { authorization: process.env.REACT_APP_ENCODE_TOKEN },
        });

        console.log(cartResponse, "responsee");

        cartDispatch({ type: "Remove_from_cart", payload: _id });
        showToast("Success", "item Removed from Cart");

      } catch (err) {
        console.error(err.cartResponse, "here");
        showToast("error", "Something went wrong, please try again.");

      }
    }
  };

  const moveToWishlist = (product) => {
    cartDispatch({ type: "Remove_from_cart", payload: product._id });


    if (!IteminwishList) {
      cartDispatch({ type: "Move_to_wishList", payload: product });
      showToast("success", `${product.title} is moved to whisList`);

    }
  };

  const incrementHandler = (_id) => {
    cartDispatch({ type: "increase_quantity", payload: _id });
  };

  const decrementHandler = (_id) => {
    qunatity > 0 && cartDispatch({ type: "decrease_quantity", payload: _id });
  };

  return (
    <div>
      <div className="cart_items flex flex-col p-2">
        {/* <!-- product card item one --> */}
        <div className="cart_item_mainbody flex">
          <div className="imagecart_container">
            <img src={img} alt="toolsimg" className="img-responsive" />
          </div>

          <div className="cart_content flex flex-col">
            <div className="cart_header flex p-1">
              <h6 className="light">{categoryName}</h6>
              <span className="herticon">
                <i className="fa fa-solid fa-heart large_icon"></i>
              </span>
            </div>

            <div className="price flex  mt-1 ml-1">
              <h6 className="pr-1 font-xl">
                <strong>{discountPrice}</strong>
              </h6>

              <h6 className="actual_price light fs-md linthrough">
                {mrpPrice}
              </h6>
              <h6 className="discount-color fs-md">{discount}</h6>
            </div>

            <div className="quantity_container flex mt-2 ml-1">
              <h6 className="pr-1 font-xl">
                <strong>Quantity</strong>
              </h6>

              <button
                className="plusminus_icon"
                onClick={() => incrementHandler(_id)}
              >
                <i className="fa fa-solid fa-plus"></i>
              </button>

              <span className="count plusminus_icon">{qunatity}</span>

              <button
                className="plusminus_icon"
                onClick={() => decrementHandler(_id)}
              >
                <i className="fa fa-solid fa-minus"></i>
              </button>
            </div>
            <button
              className="btn btn__primary mt-2 mr-2"
              onClick={() => removeFromCartHandler(_id)}
            >
              Remove From Cart
            </button>

            <button
              className="btn  btn__secondary_outline mt-2 mr-2"
              onClick={() => moveToWishlist(product)}
            >
              Move to Whitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cartcard };
