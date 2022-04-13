import { useCart } from "../Context/cart-context";
import axios from "axios"

const ProductCard = ({ prodDetail }) => {
  const { img, title, categoryName, discountPrice, mrpPrice, discount,rating, _id } =
    prodDetail;

  const { cartDispatch} = useCart()

  const addtoCartHandler = async (prodDetail) => {  

    {
    try{
         const response= await axios.post("api/user/cart",{prodDetail}, 

         {
          headers: { authorization: process.env.REACT_APP_ENCODE_TOKEN }
        });
          console.log(response)
        cartDispatch({type: "Add_to_cart", payload: prodDetail}) 
     }

     catch(error){
       console.log(error);
     }}

    }

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
            <span className="herticon">
              <i className="fa fa-solid fa-heart large_icon"></i>
            </span>
          </div>

          <div className="categoryRaing_section flex ">
          <p className="light ml-1">{categoryName}</p>
          <span className="rating_star_container"> <i className="fa fa-solid fa-star  rating_color "></i>{rating}</span>
          </div>
          <div className="price flex mt-1 ml-1">
            <h6 className="pr-1 font-xl">
              <strong>{discountPrice}</strong>
            </h6>
            <h6 className="actual_price light fs-md linthrough">{mrpPrice}</h6>
            <h6 className="discount-color fs-md">{discount}</h6>
          </div>
          
          <button 
           onClick = {() => addtoCartHandler(prodDetail)}

          className="btn btn__primary icons_btn ecoms_btn btn_margin">
            <span className="ml-3"> 
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            Add to cart
            
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
