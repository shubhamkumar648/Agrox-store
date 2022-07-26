import React from 'react'

export const AddressReducer = (state,action) => {
 
    switch(action.type) {

        case "SET_NAME": return {...state, name: action.payload }

        case "SET_CITY": return {...state, city: action.payload}

        case "SET_PINCODE": return {...state, pincode: action.payload}

        case "SET_ADDSTATE": return {...state, addState: action.payload}

        case "SET_COUNTRY": return {...state, country: action.payload}
        
        case "SET_PHONE": return {...state, phoneNo: action.payload}

        case "SET_DUMMYADDRESS": return  {

            ...state,
            name: "Happy singh chadda",
            city: "amritsar",
            addState:"punjab",
            pincode:"400201",
            country:"India",
            phoneNo:"223388"
        };

        default: return state
    }
}
