


export  const cartReducerFun = (state,action) => {
    console.log(action.type);

    switch(action.type) {


        case "Add_to_cart":
       return {...state , cartItems:[...state.cartItems , {...action.payload} ]

    }
  
}

}


