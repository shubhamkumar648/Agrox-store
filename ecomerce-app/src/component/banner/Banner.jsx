import React from 'react'

export const Banner = () => {
  return (
    <div>
 <div class="image_container img_responsive">
            <h3 class="text_center headtext_color lh-l pt-3 font-xxl">
              Welcom to Agrox Store
            </h3>
            <h5 class="text_center headtext_color lh-l font-xxl">
              We provide Quality Agriculture Products at a reliable price
            </h5>

            <div class="shopNow">
              <button class="btn btn__primary m-auto " styles="m-auto">
                <a href="./pages/productlist.html" class="link__nostyle">
                  Shop Now
                </a>
              </button>
            </div>
          </div>

    </div>
  )
}
