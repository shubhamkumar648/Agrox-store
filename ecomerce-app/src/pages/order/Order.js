import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../Context/Order-context'
import "./order.css"

export const Order = () => {

    //  const {order} = useOrder()
    //  const { orderId, paymentId, totalAmount, address, items } = order;
    //  const { name, city, addState, country, pincode, phoneNo } = address ?? {};

     const navigate =  useNavigate()


     const shooMoreHAndler = () => {

      navigate("/productlisting")
     }

  return (
      
          <div>

              {/* <h3>congratulation</h3>
     <div className='Order-maincontainer flex'>

        <div className='OrdereDetail'>
        <p>Payment id:{paymentId}</p>
        <p> Order id:{orderId}</p>
        <p>Amount Paid:{totalAmount}</p>
             <div>
       <h3>  Delviering to:</h3>
            <h3 className="font-l f-s mb-s">{name}</h3>
            <p className="font-l f-s mb-s">{`${city},${addState}, ${country} - ${pincode}`}</p>
            <p className="font-l f-s mb-s">Phone Number : {phoneNo}</p>
            </div>
        </div>
        <div className='OrderProduct'>
        {items?.map(({ _id, title, image, discountPrice, qunatity }) => { 
          
          
          return(
                    
              <div key = {_id}>
              <image src={image} alt={title}/>
                 <div>
               <h5>{title}</h5>
               <h5>Price:{discountPrice}</h5>
               <h5>qyantity:{qunatity}</h5>
               </div>
        </div>
        )})} 
    </div>
    </div>  */}
            <h3 style={{color: "green"}} className="pb-2"> Congtaulation  🎉 Payment sucessfully </h3>
    <button className='btn btn__primary' onClick={shooMoreHAndler}>Shop More</button>
    </div>
  )
}
