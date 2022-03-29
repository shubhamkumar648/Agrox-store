import React from 'react'
import pesticides from "../../assest/pesticide.jpg"
import fertilizer from "../../assest/fertilizer.jpg";
import seed from "../../assest/seed.jpg";
import tool from "../../assest/tools.jpg";

export  const Categories = () => {
  return (
    <div>

<h3 class="text_center headtext_color2 mt-2">VIEW ALL PRODUCTS</h3>
          <div class="category_container">
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Fertilizer</span>
                <img
                  src={fertilizer}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>

            {/* <!-- / product category section --> */}
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Pesticide</span>
                <img
                  src={pesticides}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Seed</span>
                <img
                  src={seed}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>
            <div class="categories">
              <a href="./pages/productlist.html">
                <span class="text-overlay fs-l">Tools</span>
                <img
                  src={tool}
                  alt="img"
                  class="img_responsive cateorgies_image"
                />
              </a>
            </div>
          </div>
    </div>
  )
}
