import React from 'react'
import {toast} from "react-toastify"

export const useToast = () => {

    const showToast  = (type,message) => {
        toast[type](message,{
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
       progress: undefined,
        })
    }
    return {showToast}
}
