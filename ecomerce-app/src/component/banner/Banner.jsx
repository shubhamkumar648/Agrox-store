import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useFilter } from '../../Context/FilterContext/Filter-context'


export const Banner = () => {

  const navigate =  useNavigate()
  const {filterdispatch} = useFilter()  

  const shopHandler = () => {
       filterdispatch({type: "CLEAR"})
       navigate("/productlisting")
  }

  return (
    <div>
 <div className="image_container img_responsive">
            <h3 className="text_center headtext_color lh-l pt-3 font-xxl">
              Welcome to Agrox Store
            </h3>
            <h5 className="text_center headtext_color lh-l font-xxl">
              We provide Quality Agriculture Products at a reliable price
            </h5>

            <div className="shopNow">
              {/* <button className="" styles="m-auto"> */}
                
                <button className=' btn btn__primary m-auto ' onClick={shopHandler}>Shop Now</button>

              {/* </button> */}
            </div>
          </div>

    </div>
  )
}
