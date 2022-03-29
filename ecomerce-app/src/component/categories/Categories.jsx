import React from 'react'
import pesticides from "../../assest/pesticide.jpg"
import fertilizer from "../../assest/fertilizer.jpg";
import seed from "../../assest/seed.jpg";
import tool from "../../assest/tools.jpg";

export  const Categories = () => {
  return (
    <div>

<h3 className="text_center headtext_color2 mt-2">VIEW ALL PRODUCTS</h3>
          <div className="category_container">
            <div className="categories">
              <a href="./pages/productlist.html">
                <span className="text-overlay fs-l">Fertilizer</span>
                <img
                  src={fertilizer}
                  alt="img"
                  className="img_responsive cateorgies_image"
                />
              </a>
            </div>

            {/* <!-- / product category section --> */}
            <div className="categories">
              <a href="./pages/productlist.html">
                <span className="text-overlay fs-l">Pesticide</span>
                <img
                  src={pesticides}
                  alt="img"
                  className="img_responsive cateorgies_image"
                />
              </a>
            </div>
            <div className="categories">
              <a href="./pages/productlist.html">
                <span className="text-overlay fs-l">Seed</span>
                <img
                  src={seed}
                  alt="img"
                  className="img_responsive cateorgies_image"
                />
              </a>
            </div>
            <div className="categories">
              <a href="./pages/productlist.html">
                <span className="text-overlay fs-l">Tools</span>
                <img
                  src={tool}
                  alt="img"
                  className="img_responsive cateorgies_image"
                />
              </a>
            </div>
          </div>
    </div>
  )
}
