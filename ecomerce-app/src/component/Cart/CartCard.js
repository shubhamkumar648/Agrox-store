
 const  Cartcard = ({product}) => {
  const {img,categoryName,discountPrice,mrpPrice,discount,_id} = product
                   
  return (
     <div>
         <div className="cart_items flex flex-col p-2">
          {/* <!-- product card item one --> */}
          <div className="cart_item_mainbody flex">
            <div className="imagecart_container">
              <img
                src={img}
                alt="toolsimg"
                className="img-responsive"
              />
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

                <h6 className="actual_price light fs-md linthrough">{mrpPrice}</h6>
                <h6 className="discount-color fs-md">{discount}</h6>
              </div>

              <div className="quantity_container flex mt-2 ml-1">
                <h6 className="pr-1 font-xl">
                  <strong>Quantity</strong>
                </h6>

                <span className="plusminus_icon">
                  <i className="fa fa-solid fa-plus"></i>
                </span>

                <span className="count plusminus_icon">1</span>
                <span className="plusminus_icon">
                  <i className="fa fa-solid fa-minus"></i>
                </span>

              </div>
              <button className="btn btn__primary mt-2 mr-2">
                Remove From Cart
              </button>

              <button className="btn  btn__secondary_outline mt-2 mr-2">
                Move to Whitlist
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export {Cartcard}
