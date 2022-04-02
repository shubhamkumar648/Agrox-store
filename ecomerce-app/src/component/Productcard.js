


const ProductCard = ({ prodDetail }) => {
  const { img, title, categoryName, discountPrice, mrpPrice, discount } =
    prodDetail;

  return (
    <div>
      <div class="product_cardMainBody">
        <div class="product_card">
          <img src={img} alt="img" class="img-responsive" />
          <div class="card_content flex mt-1 p-1">
            <h6>
              <a href="#" class="link__nostyle">
                {title}
              </a>
            </h6>
            <span class="herticon">
              <i class="fa fa-solid fa-heart large_icon"></i>
            </span>
          </div>
          <small class="light ml-1">{categoryName}</small>
          <div class="price flex mt-1 ml-1">
            <h6 class="pr-1 font-xl">
              <strong>{discountPrice}</strong>
            </h6>
            <h6 class="actual_price light fs-md linthrough">{mrpPrice}</h6>
            <h6 class="discount-color fs-md">{discount}</h6>
          </div>
          <button class="btn btn__primary icons_btn ecoms_btn btn_margin">
            <span class="ml-3">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
