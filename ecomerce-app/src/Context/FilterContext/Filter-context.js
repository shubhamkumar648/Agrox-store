import React from 'react'
import { createContext,useReducer,useContext } from 'react'
import { FilterReducer } from '../../Reducers/FilterReducer/FilterReducer'


const filterContext  = createContext()

 const FilterProvider = ({children}) => {

  const initialState = {
    sortBy: "",
    category: [],
    rating: "",
    price:0
  }

   const [filterstate,filterdispatch] = useReducer(FilterReducer,initialState)

  return (
  
    <filterContext.Provider value={{filterstate,filterdispatch}}>
      {children}
    </filterContext.Provider>
)

}

const useFilter = () => useContext(filterContext)

export {useFilter,FilterProvider}
