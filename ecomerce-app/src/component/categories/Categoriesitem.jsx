import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../Context/FilterContext/Filter-context'

export const Categoriesitem = ({itemDetail}) => {

   const navigate =  useNavigate()
   const {filterdispatch} = useFilter()
  return (

    <div
    className="categories"
  
    onClick={() => {
        filterdispatch({type: "CLEAR"})
        filterdispatch({type:"FILTER_BY_CATEGORY", payload: itemDetail.categoryName})
            navigate("./productlisting")
        }}
  >
      <span className="text-overlay fs-l">{itemDetail.categoryName}</span>
      <img
        src={itemDetail.categoryImg}
        alt="img"
        className="img_responsive cateorgies_image"
      />
  </div>
  )
}
