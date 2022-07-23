import { useCart } from "../Context/cart-context";
import axios from "axios";
import { IteminList, ItemWishlist } from "../Utils";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Auth-context";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import {FiHeart} from "react-icons/fi";
const ProductCard = ({ prodDetail }) => {
  const {
    img,
    title,
    categoryName,
    discountPrice,
    mrpPrice,
    discount,
    rating,
    _id,
  } = prodDetail;

  const { cartState, cartDispatch } = useCart();
  
  const {user,encodedToken} = useAuth()

  const IteminyourList = IteminList(_id, cartState.cartItems);
  const IteminyourwishList = ItemWishlist(_id, cartState.wishList);

  const navigate = useNavigate()
  const location = useLocation()

  const addtoCartHandler = async (prodDetail) => {

    if(user) {
    {
      try {

        const response = await axios.post(
          "api/user/cart",
          { prodDetail },

          {
            headers: { authorization: encodedToken},
          }
        );
        cartDispatch({ type: "Add_to_cart", payload: prodDetail });
      } catch (error) {
        console.log(error.response);
      }
    }

  }
  else {
    navigate("/login", { replace: true, state: { from: location } })

  }
  };

  const addTowishlistHandler = async (prodDetail) => {

    if(user) {
    {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product: prodDetail },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );

        cartDispatch({ type: "Move_to_wishList", payload: prodDetail });
      } catch (error) {
        console.log(error.response);
      }
    }

  }

  else {
    navigate("/login", { replace: true, state: { from: location } })

  }
  };

  const removefromWishlist = async (_id) => {
    
    {
      try {
        const response = await axios.delete(`api/user/wishlist/${_id}`, {
          headers: {
            authorization: encodedToken,
          },
        });

        cartDispatch({ type: "Delete_from_wishlist", payload: _id });
      } catch (error) {
        console.log(error.response, "error here");
      }
    }
  };

  return (
    <div>
      <div className="product_cardMainBody">
        <div className="product_card">
          <img src={img} alt="img" className="img-responsive" />

          <div className="card_content flex mt-1 p-1">
            <h6>
              <a href="#" className="link__nostyle">
                {title}
              </a>
            </h6>

            {IteminyourwishList ? (
              <span
                className="herticon"
                onClick={() => removefromWishlist(_id)}
              >
                {/* <i className="fa fa-solid fa-heart large_icon"></i> */}
                <AiFillHeart className="large_icon"/>
                
              </span>
            ) : (
              <span
                className="herticon"
                onClick={() => addTowishlistHandler(prodDetail)}
              >
                {/* <i className="fa fa-solid fa-heart large_icon"></i> */}
                <FiHeart className="large_icon"/>
              </span>
            )}
          </div>

          <div className="categoryRaing_section flex ">
            <p className="light ml-1">{categoryName}</p>
            <span className="rating_star_container">
              {" "}
              <i className="fa fa-solid fa-star  rating_color "></i>
              {rating}
            </span>
          </div>
          <div className="price flex mt-1 ml-1">
            <h6 className="pr-1 font-xl">
              <strong>{discountPrice}</strong>
            </h6>
            <h6 className="actual_price light fs-md linthrough">{mrpPrice}</h6>
            <h6 className="discount-color fs-md">{discount}</h6>
          </div>

          {IteminyourList ? (
            <Link to="/cart">
              <button className="btn btn__primary icons_btn ecoms_btn btn_margin">
                <span className="ml-3">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                Go to cart
              </button>
            </Link>
          ) : (
            <button
              onClick={() => addtoCartHandler(prodDetail)}
              className="btn btn__primary icons_btn ecoms_btn btn_margin"
            >
              <span className="ml-3">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
