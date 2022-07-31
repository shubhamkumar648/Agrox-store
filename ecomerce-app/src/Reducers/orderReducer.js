
export const orderReducer = (action,state) => {
    const {type,payload} = action;

    switch(type) {

        case  "SAVE_ORDER":
        return {
            ...state,order: payload
        };
        case "CLEAR_ORDER":
            return {
                ...state,order: {}
            }

    } 
    

  
}
