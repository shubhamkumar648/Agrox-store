
export const orderReducer = (action,state) => {

    switch(action.type) {

        case  "SAVE_ORDER":
        return {
            ...state,order: action.payload
        };
        case "CLEAR_ORDER":
            return {
                ...state,order: {}
            }

            default:  return state
    } 
    

  
}
