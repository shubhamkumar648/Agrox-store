import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../Context/Order-context'
import "./order.css"

export const Order = () => {

    // const {order} = useOrder()
    // const { orderId, paymentId, totalAmount, address, items } = order;

    // const navigate =  useNavigate()
    // const { name, city, addState, country, pincode, phone } = address ?? {};

  return (
      
          <>

              <h3>congratulation</h3>
        {/* <h2>Congratulation</h2>
     <div className='Order-maincontainer flex'>

        <div className='OrdereDetail'>
        <p>Payment id:{paymentId}</p>
        <p> Order id:{orderId}</p>
        <p>Amount Paid:{totalAmount}</p>
             <div>
       <h3>  Delviering to:</h3>
            <h3 className="font-l f-s mb-s">{name}</h3>
            <p className="font-l f-s mb-s">{`${city},${addState}, ${country} - ${pincode}`}</p>
            <p className="font-l f-s mb-s">Phone Number : {phone}</p>
            </div>
        </div>
        <div className='OrderProduct'>
        {items?.map(({ _id, title, image, newPrice, quantity }) => (
              <div key = {_id}>
              <image src={image} alt={title}/>
                 <div>
               <h5>{title}</h5>
               <h5>Price:{newPrice}</h5>
               <h5>qyantity:{quantity}</h5>
               </div>
        </div>
        ))} */}
    {/* </div>
    </div> */}
    </>
  )
}
