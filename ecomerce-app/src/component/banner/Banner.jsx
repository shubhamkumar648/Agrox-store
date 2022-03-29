import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <div>
 <div className="image_container img_responsive">
            <h3 className="text_center headtext_color lh-l pt-3 font-xxl">
              Welcom to Agrox Store
            </h3>
            <h5 className="text_center headtext_color lh-l font-xxl">
              We provide Quality Agriculture Products at a reliable price
            </h5>

            <div className="shopNow">
              <button className="btn btn__primary m-auto " styles="m-auto">
                
                <Link className='link__nostyle' to='/productlisting'>Shop Now</Link>

              </button>
            </div>
          </div>

    </div>
  )
}
