


export  const cartReducerFun = (state,action) => {

    switch(action.type) {


        case "Add_to_cart":
       return {...state , cartItems:[...state.cartItems , {...action.payload} ]

    }

    case "Remove_from_cart": 

    return {...state, cartItems: state.cartItems.filter((item) => item._id !== action.payload)}
    
  
}

}


